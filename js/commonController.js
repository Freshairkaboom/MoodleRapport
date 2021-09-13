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
    else return createAssignmentContainers();
}

function createTaskList(taskData) {

    let html = "";

    html += createAssignmentTable(taskData);

    return html;
}

function createAssignmentContainers()
{

    let html = '';


    html += createWeekButtons();
    html += createAssignmentTable();
    /*
    model.assignments.title
    model.assignments.url

    TODO:
    * Check currently selected week.

    * Loop through all tasks for users and look for tasks matching currently selected week.

    * Create a list of all tasks for the matching week.

    * Return each element on the list as HTML

    */
    //let assignment = '<div class="links"><ul>';

    //let assignment =

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

function createAssignmentTable(taskData)
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
        if (taskData != null)
        {
            if (taskData[i] != null)
            progress = taskData[i].progress;
        }


        tableHTML += `

        <tr>
          <th>
          ${getButtonDivs(i)}
          </th>
          <th>${addAdminColor(progress)}<span><a href="${taskURL}">${taskName}</a></span></th>
        </tr>`
    }

    return tableHTML;
}

function approveTask(index)
{

    if (model.displayedTasks.length <= 0) return;

    model.displayedTasks[index].approved = !model.displayedTasks[index].approved;


    console.log("Exception in approveTask() - Not implemented yet");
}

function getButtonDivs(index)
{
    let html = "";

    if (!loggedInUserIsAdmin())
    {
        html = `
        <input type="radio" class="red" name="${index}" value="radio" onClick="changeColour('r', ${index}, ${Progress.NOTSTARTED})">
        <input type="radio" class="yellow" name="${index}" value="radio" onClick="changeColour('g', ${index}, ${Progress.STARTED})">
        <input type="radio" class="green" name="${index}" value="radio" onClick="changeColour('b', ${index}, ${Progress.FINISHED})">
        `
    }
    else
    {
        html = `<input type="checkbox" name="Approved" onClick="approveTask(${index})">`
    }

    return html;
}
