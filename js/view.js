view();
logInUser();
generateRandomData();

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
            list += '<li>' + user.name +'</li>';
    })

    list += '</ul>';

    return list;
}




function title() {
    let html = '';
    html += `
        Tittel
    `;

    return html;
}
