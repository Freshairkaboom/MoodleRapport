
generateRandomData();

function clearRandomData()
{
    model.tasks = [];
    view();
}
function generateRandomData()
{  
    // Clamp Implementation
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    model.tasks = [];
    
    let amountToGenerate = 1000;
    let totalWeeks = model.weeks.length;
    let progressLength = 3; //Enum Progress has 3 properties
    let i = 0;

    while (amountToGenerate > 0)
    {  
        let nextID = i;
        let randomWeek = Math.floor(Math.random() * totalWeeks);
        let taskCount = getTaskCountForWeek(randomWeek);

        // Distribute tasks with results skewed towards earlier weeks having a higher percentage of completed tasks compared to later weeks
        let distributionStrength = .2;
        let distributionFactor = 1 - ( Math.random() * (( randomWeek ) / ( totalWeeks * (1 * distributionStrength) )));
        let distribution = clamp(distributionFactor, 0, 1);

        // Randomize The data
        let randomTaskInWeek = Math.floor(Math.random() * taskCount);
        let randomProgress = Math.round((clamp(((Math.random() * distribution) * progressLength), 0, progressLength-1)));        
        let randomStudent = Math.floor(Math.random() * model.users.length);

        // Populate task with random data
        let randomizedTask = { id: nextID,  weekIndex: randomWeek,  taskInWeek: randomTaskInWeek, progress: randomProgress, approved: false, student: randomStudent }

        // Check if adding the current task exceeds the maximum possible tasks for this week
        let duplicateTasks = 0;
        model.tasks.forEach(task => {
            if (task.weekIndex == randomizedTask.weekIndex && task.taskInWeek == randomizedTask.taskInWeek && task.student == randomizedTask.student)
                duplicateTasks++;              
        })
        
        // If not, add the task to the list of tasks
        if (duplicateTasks < taskCount && taskCount != 0)
            model.tasks.push(randomizedTask);            

        i++;
        amountToGenerate--;
    }

    view();
}

function getTaskCountForWeek(_week)
{
    let totalTasks;
    model.weeks.forEach(week => {
        if (week.weekId == _week+1) //Adding one because our weekId starts at 1, while the week passed into function is an index
            totalTasks = week.taskCount;
    })

    return totalTasks;
}

function getChartData(_week, _student)
{
    let week = _week;
    let student = _student;

    // Set up data for the pie chart with values at zero
    let pieData = [
        { x: 'Ikke Startet', value: 0, normal: {fill: "#FF0000",}},
        { x: 'Startet', value: 0, normal: {fill: "#FFFF00",}},
        { x: 'Ferdig', value: 0, normal: {fill: "#32CD32",}}]

    // Grab all current tasks for the student and week passed into this function. Also grabbing the amount of tasks for the specific week.
    let tempData = getDataForStudent(week, student);
    let remainingTasks = getTaskCountForWeek(week);

    // Sort through the data and assign it to the proper pie-pieces. Subtract from remaining tasks for each task in list.
    tempData.forEach(task => {
      pieData[task.progress].value++; remainingTasks--;
    })

    //Finally assign any leftover tasks to the not started category since those may or may not be included in the tempData list.
    pieData[0].value += remainingTasks;

    let finalData = [];
    // Loop through the sorted data and discard anything without a value. Silly to display a graph with nothing
    pieData.forEach(sector => {
        if (sector.value > 0) finalData.push(sector);
    });

    // Return the finalized pie data for this particular student back to the chart generator
    return finalData;
}

function fillPieCharts()
{
    let week = model.PageStates.selectedWeek;

    model.users.forEach(user => {
        if (!user.isAdmin && !user.isDisabled)
        {
            // Generate the data
            let id = user.id.toString();
            let data = getChartData(week, user.id);
            let newChart = anychart.pie();

            // Assign the data
            newChart.container(id);
            newChart.data(data);

            // Set the properties
            setChartProperties(newChart);

            // Draw the chart
            newChart.draw();
        }
    })
}

//#region Chart Properties
function setChartProperties(newChart)
{
    // Set the properties
    newChart.legend(false);
    newChart.radius("40%");
    newChart.background().stroke("1 red");
    newChart.background().fill("#fff", 0);

    // Set the labels
    var labels = newChart.labels();
    labels.enabled(true);
    labels.fontColor("black");
    labels.fontSize("10")
}
//#endregion


view();
logInUser();

function view() {

    document.body.innerHTML = `<div id="app"></div>`;

    switch (model.app.currentPage)
    {
        case Pages.LOGIN:
            loginView();
            break;

        case Pages.USER:
            userView();
            break;

        case Pages.ADMIN:
            adminView();
            break;
    }
}




function adminView() {
    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

    <div class="bannerContainer">
    ${model.app.loggedInUser.name}
    <button class="button-primary" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
        Modul 1<button class="button-primary" onclick="swapMenuItem()">${swapButtonName()}</button>
        ${navigationMenu()}
        </div>

    <div class="titleContainer">
        ${title()}
    </div>

    <div class="bodyContainer">
        ${createChartContainers()}
    </div>
    </div>
    `;

    fillPieCharts();
}
// KAKEDIAGRAM
function createDiagrams(week)
{
    let chartData = [];

    for (i = 0; i < model.users.length; i++)
    {
        if (!model.users[i].isAdmin && !model.users[i].isDisabled)
        {
            chartData.push(getDataForStudent(week, i))
        }
    }


    console.log(chartData);
}

function getDataForStudent(week, student)
{
    let userData = [];

    model.tasks.forEach(element => {
        if (element.weekIndex == week && element.student == student)
        {
            userData.push(element);
        }
    })

    return userData;
}

function loginView() {

    document.getElementById('app').innerHTML = `

    <input id="username" type="text" value="Username" onclick="this.value=''" onchange="model.inputs.loginPage.username=this.value"></input> Forgotten username or password?
    </br>
    <input id="password" type="text" value="Password" onclick="this.value=''" onchange="model.inputs.loginPage.password=this.value"></input> Cookies must be enabled in your browser
    </br>
    <button class="button-primary" onclick="logInUser()"> Login</button>
    </br>
    <input type="checkbox" id="loginCheckBox" onclick="rememberPassword()">Remember Password
   </hr>

   </br>
   Moodle Rapport very early access ${APP_VERSION_NUMBER}
   `;
}

function userView() {
    document.getElementById('app').innerHTML = `
    <div class="bannerContainer">
    ${model.app.loggedInUser.name}
    <button class="button-primary" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
        ${navigationMenu()}
    </div>

    <div class="titleContainer">

    </div>

    <div class="bodyContainer">

    </div>
    Dette er brukersiden.
    `;
}

// Admin controller
function swapButtonName()
{
    if (model.PageStates.menuType == MenuType.STUDENT) return "Uker";
    else return "Studenter";
}
function swapMenuItem()
{
    model.PageStates.menuType = (model.PageStates.menuType + 1) % 2;

    view();
}

function navigationMenu() {

    let html = '';

    switch (model.PageStates.menuType)
    {
        case MenuType.WEEKS:

            html += `
            ${listWeeks()}
            `;

            break;

        case MenuType.STUDENT:

            html += `
            ${listStudents()}
            `;

            break;


    }

    return html;
}

function updateSelectedWeek(_week)
{
    model.PageStates.selectedWeek = _week-1;
    view();
}

function listWeeks()
{
    let list = '<ul>';

    model.weeks.forEach(week =>
    {
        let _weekText = `Uke ${week.weekId}`;
        if (week.weekId-1 == model.PageStates.selectedWeek) _weekText = `=> UKE ${week.weekId} <=`;

        list += `<li class="week" onclick="updateSelectedWeek(${week.weekId})">` + `${_weekText} ` + `</li>`;
    })

    list += '</ul>';

    return list;
}

function listStudents()
{
    let list = '<ul>';

    model.users.forEach(user => {
        if (!user.isAdmin && !user.isDisabled)
            list += '<li  class="student">' + user.name +'</li>';
    })

    list += '</ul>';

    return list;
}


function createChartContainers() {
    let html = '';

    model.users.forEach(user => {
        if (!user.isAdmin && !user.isDisabled)
            html += ` <div id=${user.id.toString()} class="student" style="width: 20rem; height: 20rem;">${user.name}</div>`;
    })

    return html;
}
function title() {
    let html = '';
    html += `
        Tittel
    `;

    return html;
}
