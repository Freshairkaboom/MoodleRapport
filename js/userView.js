function userView() {

    let size = 20;
    model.PageStates.menuType = MenuType.WEEKS;

    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

    <div class="bannerContainer">
    ${model.app.loggedInUser.name}
    <button class="button-primary" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
    Modul 1<button class="button-primary2">Navigasjon</button>
        ${navigationMenu()}
        </div>

    <div class="titleContainer">
     Velkommen! Her finner du oppgavene for ${title()}
     <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png" width="20px" height="20px" onclick="toggleColorBlindMode()">
    </div>

    <div class="bodyContainer">
        ${body()}
        <br>
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.red};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Ikke Startet oppgaven.

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.yellow};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Startet oppgaven.

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.green};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Ferdig med oppgaven.
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.black};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Oppgaven er ikke godkjent.
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.white};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Oppgaven er godkjent.

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


    setDisplayedTasks(_week, _student);


    let html = createWeekButtons();
    html += createTaskList();

    if (html != "")
    return html
    else return "";
}

function setDisplayedTasks(week, _student)
{
    let _data = [];
    let tasksThisWeek = getTaskCountForWeek(week);


    model.displayedTaskId = [];

    model.tasks.forEach( task => {
        if (task.weekIndex == week && task.student ==  _student)
        {
            if (!model.displayedTaskId.includes(task.id))
                model.displayedTaskId.push(task.id);
        }
    })

    let _taskInWeek = 0;
    if (model.displayedTaskId.length < tasksThisWeek)
    {
        for (i = 0; i < tasksThisWeek; i++)
        {


            if (!model.displayedTaskId.includes(i+1))
            {
                model.totalTasksMade++;
                let newTask = { id: model.totalTasksMade,  weekIndex: week,  taskInWeek: i, progress: Progress.NOTSTARTED, approved: false, student: _student };
                model.displayedTaskId.push(newTask.id);
                model.tasks.push(newTask);
            }
        }
    }

    model.displayedTaskId = model.displayedTaskId.sort((a, b) => a - b);
}
