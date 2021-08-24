

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
    <button class="loginbutton" onclick="logInUser()"> Login</button>
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
    <button class="loginbutton" onclick="logOutUser()"> Log out</button>
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
    <button class="loginbutton" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
        <button onclick="swapMenuItem()">${swapButtonName()}</button>
        ${navigationMenu()}
        </div>

    <div class="titleContainer">
        ${title()}
    </div>

    <div class="bodyContainer">
        ${body()}
    </div>
    `;

}

function swapButtonName()
{
    if (model.PageStates.menuType == MenuType.STUDENT) return "Uker";
    else return "Studenter";
}
function swapMenuItem()
{
    model.PageStates.menuType = (model.PageStates.menuType + 1) % 2;
    console.log(model.PageStates.menuType);
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
