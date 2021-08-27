
function getTaskCountForWeek(week)
{
    let totalTasks;
    model.weeks.forEach(element => {
        if (element.weekId == week)
        totalTasks = element.taskCount;
    })

    return totalTasks;
}

function getChartData(_week, _student)
{
    // set the data
    // chart library needs data in the following format:
    /*
        let data = [
        {x: "White", value: 223553265},
        {x: "Black or African American", value: 38929319},
        {x: "American Indian and Alaska Native", value: 2932248},
        {x: "Asian", value: 14674252},
        {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
        {x: "Some Other Race", value: 19107368},
        {x: "Two or More Races", value: 9009073}
      ];
      */

    let week = _week;
    let student = _student;
    let tasksThisWeek = getTaskCountForWeek(week);

    let notStartedObj = {
        x: 'Not Started',
        value: 0,
        normal: {fill: "#FF0000",}
    }
    let startedObj = {
        x: 'Started',
        value: 0,
        normal: {fill: "#FFFF00",}
    }
    let finishedObj = {
        x: 'Finished',
        value: 0,
        normal: {fill: "#32CD32",}
    }

    // let week = 1;
    // let student = 0;
    //let tasksThisWeek = getTaskCountForWeek(week);

    let tempData = getDataForStudent(0, 1);

    console.log(tempData.length);
    console.log(tempData[0]);
    console.log("Tasks this week:" + tasksThisWeek);
    console.log("#############");

    let remainingTasks = tasksThisWeek;

    for (i = 0; i < tempData.length; i++)
    {
        if (tempData[i].progress == Progress.STARTED)
        {
            startedObj.value++;
            remainingTasks--;
        }
        else if (tempData[i].progress == Progress.FINISHED)
        {
            finishedObj.value++;
            remainingTasks--;
        }
        else if (tempData[i].progress == Progress.NOTSTARTED)
        {
            notStartedObj.value++;
            remainingTasks--;
        }
    }
    notStartedObj.value += remainingTasks;

    let finalData = [];

    if (notStartedObj.value > 0)
        finalData.push(notStartedObj);
    if (startedObj.value > 0)
        finalData.push(startedObj);
    if (finishedObj.value > 0)
        finalData.push(finishedObj);

    console.log(finalData)

    return finalData;
}


createPieChart();
function createPieChart() {
    anychart.onDocumentReady(function() {


        let data = getChartData(1, 0);
        // create the chart

        let chart = anychart.pie();

        // set the chart title
        // chart.title("Student 0");

        // add the data
        chart.data(data);

        // display the chart in the container
        chart.container('container');
        chart.draw();
        chart.legend(false);
        chart.radius("40%");
        chart.background().stroke("1 red");
        chart.background().fill("#fff", 0);

        var labels = chart.labels();
        labels.enabled(true);
        labels.fontColor("black");
        labels.fontSize("6")



        // let chart_2 = anychart.pie();
        // // chart_2.title("Student 2");

        // chart_2.data(data);
        // chart_2.container('container2');
        // chart_2.draw();

      });
}

view();
function view() {

    switch (model.app.currentPage)
    {
        case Pages.LOGIN:
            loginView();
            logInUser("Admin", "admin"); // CALLING WITH DEBUG ARGUMENTS
            break;

        case Pages.USER:
            userView();
            break;

        case Pages.ADMIN:
            adminView();
            break;
    }
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
function adminView() {
    document.getElementById('app').innerHTML = `
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
        ${body()}
        <div id="container"  style="width: 20rem; height: 20rem;"></div>
        <div id="container2" style="width: 20rem; height: 20rem"></div>
    </div>
    `;

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

function listWeeks()
{
    let list = '<ul>';

    for (i = 0; i < model.weeks.length; i++)
        list += '<li>' + 'Uke' + '' + model.weeks[i].weekId +'</li>';

    list += '</ul>';

    return list;
}

function listStudents()
{
    let list = '<ul>';

    for (i = 0; i < model.users.length; i++)
    {
        if (!model.users[i].isAdmin)
            list += '<li>' + model.users[i].name +'</li>';
    }


    list += '</ul>';

    return list;
}


function body() {
    let html = '';
    html += `
       Hovedinnhold
    `;

    return html;
}
function title() {
    let html = '';
    html += `
        Tittel
    `;

    return html;
}
