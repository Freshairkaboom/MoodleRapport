// Student Views hvor admin ser alle oppgavene per student
// Title funsjon
// Kommentar felt admin og user


// UserView med "info side"

// user View med oppgavene og radio knapper for å endre Started Not Started Finished
// Ha en sjekk for om logget inn bruker er admin eller user, og vise approve-button/radio-buttons i forhold til dette

/*

function displayStudentInfoView()
{
    showRadioButtons();
    showApprovedButtons();
}

function showRadioButtons()
{
    if (loggedInUser != UserInfoIsDisplayedFor) return;
}

function showApprovedButtons()
{
    if (loggedInUser.isAdmin == false) return;

    return html "approve button her med onclick osv"
}



*/


view();
logInUser(); // CALLING FOR DEVELOPMENT_TESTING
generateRandomData(); // DEVELOPER_FUNCTION

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


function body()
{
    if (loggedInUserIsAdmin() && model.PageStates.menuType == MenuType.WEEKS)
    {
        console.log("Creating Chart Containers");
        return createChartContainers();
    }
    else if (loggedInUserIsAdmin() && model.PageStates.menuType == MenuType.STUDENT)
    {
        console.log("Creating Assignment Containers");
        return createAssignmentContainers();
    }
    else return createAssignmentContainers();
}


function createAssignmentContainers()
{
    /*
    model.assignments.title
    model.assignments.url

    TODO:
    * Check currently selected week.

    * Loop through all tasks for users and look for tasks matching currently selected week.

    * Create a list of all tasks for the matching week.

    * Return each element on the list as HTML

    */
    let assignment = '<div class="links"><ul>';

    assignment += createAssignmentTable();

    return assignment;
}
/* 
<div id= "genre">
What do you bust a move to?
<br>
<br>
<form name="music" method="post" action="">
<p>
<input type="radio" name="music" value="radio" onClick="changeColour('b')">Blues
<br>
<input type="radio" name="music" value="radio" onClick="changeColour('r')">Rock
<br>
<input type="radio" name="music" value="radio" onClick="changeColour('p')">Pop
<br>
</form>
</div>


function changeColour(value)
{
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#FF0000";
        break;
        case 'r':
            color = "#0000FF";
        break;
        case 'p':
            color = "#FF00FF";
        break;
    }
    document.body.style.backgroundColor = color;
}

*/ 

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

        let buttonDivs = getButtonDivs();
        
        tableHTML += `
        
        <tr>
          <th>
          ${getButtonDivs(i)}
          </th>
          <th>${addAdminColor()}<span><a href="${taskURL}">${taskName}</a></span></th>
        </tr>`
    }

    return tableHTML;
}

function addAdminColor()
{
    let html = "";
    let size = 20;
    let color = Color.red;

    if (loggedInUserIsAdmin())
    {
        html += `<svg width="${size}" height="${size}">
        <rect width="${size}" height="${size}" style="fill:${color};stroke-width:3;stroke:rgb(100,0,100)" />
        </svg>`;
    }

    return html;
}

function addColorBoxes()
{
    let html = "";

    let size = 20;

    html += `<th>
            <rect width="${size}" height="${size}" style="fill:${Color.red};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.yellow};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.green};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>
            
            </br></span></th>
            `;

    return html;
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
        html = `<input type="checkbox" name="Approved" onClick="approveTask()">`
    }

    return html;
}

function approveTask()
{
    console.log("Exception in approveTask() - Not implemented yet");
}

function changeColour(color, index, task)
{
    console.log("Color: " + color + " Index: " + index + " Task: " + task);
    console.log("Exception - Not Implemented yet");
}





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
