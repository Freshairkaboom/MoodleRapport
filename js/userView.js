function userView() {

    model.PageStates.menuType = MenuType.WEEKS;

    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

    <div class="bannerContainer">
    ${model.app.loggedInUser.name}
    <button class="button-primary" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
        ${navigationMenu()}
        </div>

    <div class="titleContainer">
        ${title()}
    </div>

    <div class="bodyContainer">
        ${body()}
    </div>
    </div>
    `;
}

function createStudentPage()
{
    let _week = model.PageStates.selectedWeek;
    let _student = model.PageStates.selectedStudent;


    let weekOutOfRange = (_week < 0 || _week >= model.weeks.length);

    if (weekOutOfRange || _student == "") { console.log(_week + "/" + _student);
    return; }


    model.displayedTasks = getDisplayedTasks(_week, _student);

    // model.tasks.forEach(task => {
    //     if(task.student == _student && task.weekIndex == _week) {
    //         _data.push(task);
    //     }
    //});

    let html = createWeekButtons();
    html += createTaskList(model.displayedTasks);

    if (html != "")
    return html
    else return "";
}

function getDisplayedTasks(week, _student)
{
    let _data = [];
    let tasksThisWeek = getTaskCountForWeek(week);


    // Generate empty list of task objects for this week and student
    for (i = 0; i < tasksThisWeek; i++)
    {
        let newTask = { id: -1,  weekIndex: week,  taskInWeek: i, progress: Progress.NOTSTARTED, approved: false, student: _student}
        _data.push(newTask);
    }

    // console.log("DATA");
    // console.log(_data);
    // console.log("_________________________________");

    // Loop through all existing tasks and populate the temporary tasks with the proper information.
    model.tasks.forEach(task => {

        _data.forEach( tempTask =>
        {
            if (task.weekIndex == tempTask.weekIndex && task.taskInWeek == tempTask.taskInWeek && task.student ==  tempTask.student)
            {
                tempTask.id = task.id;
                tempTask.progress = task.progress;
                tempTask.approved = task.approved;
            }
        })
    })

    // Make sure to give each new task a new unique ID when we push them back into the model.tasks Array

    model.displayedTasks = _data;

    addDisplayedTasksToTasks(); // Call this when information has been changed. Then call getDisplayedTasks again to refresh.


    return model.displayedTasks;
}

function addDisplayedTasksToTasks()
{
    let taskID = model.totalTasksMade;

    model.displayedTasks.forEach(task =>
        {
            if (task.id == -1)
            {
                taskID++;
                task.id = taskID;
            }
        })

    model.totalTasksMade = taskID;

    // console.log("Displayed Tasks");
    // console.log(model.displayedTasks);
    // console.log("_________________________________");


    model.displayedTasks.forEach( dispTask =>
    {
        model.tasks.forEach(task => {
            if (task.id == dispTask.id)
            {
                task = dispTask;
            }
            else
            {
                model.tasks.push(dispTask);
            }
        })
    })

    model.displayedTasks = [];
}
