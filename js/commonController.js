function listWeeks()
{
    let list = '<ul>';

    model.weeks.forEach(week =>
    {
        let _weekText = `${week.description}`;
        if (week.weekId-1 == model.PageStates.selectedWeek) _weekText = `=> ${week.description} <=`;

        list += `<li class="week" onclick="updateSelectedWeek(${week.weekId})">` + `${_weekText} ` + `</li>`;
    })

    list += '</ul>';

    return list;
}

function updateSelectedWeek(_week)
{
    model.PageStates.selectedStudent = "";
    model.PageStates.selectedWeek = _week-1;
    view();
}

function updateSelectedWeekFromWeekButtons(_week)
{
    model.PageStates.selectedWeek = _week-1;
    view();
}

function title() {

    let title = "";
    let name = '';

    if(loggedInUserIsAdmin()) {
        model.users.forEach(user => {
            if (user.id == model.PageStates.selectedStudent && !user.isAdmin && !user.isDisabled)
            {
                name = '- ' + user.name;
            }
        });
    }

    model.weeks.forEach(week => {
        let _week = week.weekId - 1;

        if (_week == model.PageStates.selectedWeek)
        {
            title = week.description;
        }
    })

    let html = '';
    html += `
        ${title}
        ${name}

    `;

    return html;
}

function getMatchingColor(progress)
{
    if (progress == Progress.NOTSTARTED) return Color.red;
    else if (progress == Progress.STARTED) return Color.yellow;
    else if (progress == Progress.FINISHED) return Color.green;
    else return Color.default;
}

function body()
{
    if (loggedInUserIsAdmin())
    {
        switch (model.PageStates.selectedStudent)
        {
            case "":

                console.log("Creating Chart Containers");
                return createChartContainers();

                break;

            default:
                return createStudentPage(); //createStudentPage();
                break;
        }
    }
    else
    {
        return createAssignmentContainers();
    }
}

function createTaskList() {

    let html = "";

    html += createAssignmentTable();

    return html;
}

function createAssignmentContainers()
{

    let html = '';

    let _week = model.PageStates.selectedWeek;
    let _student = model.app.loggedInUser.id;

    setDisplayedTasks(_week, _student);

    html += createWeekButtons();
    html += createAssignmentTable();

    return html;
}

function createWeekButtons() {
    let html = ``;
model.weeks.forEach(week =>
    {
        let selected = (week.weekId-1 == model.PageStates.selectedWeek ? 'option-a' : 'option-b');

        html += `<button class="${selected}" onclick="updateSelectedWeekFromWeekButtons(${week.weekId})">${week.description}</button>`;
    })


    return html;

}

function createAssignmentTable()
{

    let _selectedWeek = model.PageStates.selectedWeek;
    let listOfTasksThisWeek = [];

    model.assignments.forEach(task => {
        if (task.weekIndex == _selectedWeek)
            listOfTasksThisWeek.push(task);
    });

    let containerCount = listOfTasksThisWeek.length;


    let tableHTML = `<table class="tableContainer" style="width:100%">`;

    if (!loggedInUserIsAdmin())
        tableHTML += addColorBoxes();

    for (i = 0; i < containerCount; i++)
    {
        let taskURL = listOfTasksThisWeek[i].url;
        let taskName = listOfTasksThisWeek[i].title.toString();

        let progress = Progress.NOTSTARTED;

        let currentTaskId = model.displayedTaskId[i];

        model.tasks.forEach(task => {
            if (task.id == currentTaskId)
                progress = task.progress;
        })


        tableHTML += `<tr>
        <th>
        ${getButtonDivs(i)}
        ${addAdminColor(progress)}<span><a href="${taskURL}">${taskName}</a></span></th>
        </tr>
       `
    }

    return tableHTML;
}


function addApprovedColors(index)
{
    let html = "";
    let size = 20;
    let color;

    let _task = findTaskByIndex(index);

    if (_task == null) return "Cant find task";

    if (_task.approved) color = Color.white;
    else color = Color.black;

    html += `<svg width="${size}" height="${size}">
    <rect width="${size}" height="${size}" style="fill:${color};stroke-width:3;stroke:rgb(100,0,100)" />
    </svg>`;

    return html;
}

function approveTask(index)
{
    if (model.displayedTaskId.length <= 0) return;

    let taskId = model.displayedTaskId[index];

    model.tasks.forEach(task => {
            if (task.id == taskId)
            {
                task.approved = !task.approved;
            }
    })
}

function getButtonDivs(index)
{
    let html = "";


    if (!loggedInUserIsAdmin())
    {


        html = `
        <input type="radio" ${getRadioStatus(index, Progress.NOTSTARTED)} class="red" name="${index}" value="radio" onClick="changeColour('red', ${index}, ${Progress.NOTSTARTED})">
        <input type="radio" ${getRadioStatus(index, Progress.STARTED)} class="yellow" name="${index}" value="radio" onClick="changeColour('yellow', ${index}, ${Progress.STARTED})">
        <input type="radio" ${getRadioStatus(index, Progress.FINISHED)} class="green" name="${index}" value="radio" onClick="changeColour('green', ${index}, ${Progress.FINISHED})">
        ${addApprovedColors(index)}
        `
    }
    else
    {
        html = `<input type="checkbox" ${getApprovalStatus(index)} name="Approved" onClick="approveTask(${index})">Godkjenn oppgave`
    }

    //${getApprovalStatus()}
    return html;
}

function getRadioStatus(index, progress)
{
    let _task = findTaskByIndex(index);

    if (_task == null) return "";

    if (_task.progress == progress) return "checked";
    else return "";
}

function getApprovalStatus(index)
{
    let task = findTaskByIndex(index);

    if (task == null) return "";

    if (task.approved) return "checked";
    else return "";
}

function findTaskByIndex(index)
{
    let _task;
    let taskId = model.displayedTaskId[index];

    model.tasks.forEach(task => {
            if (task.id == taskId)
                _task = task;
    });

    return _task;
}
