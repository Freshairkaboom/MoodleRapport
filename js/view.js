

view();
function view() {

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
    <button class="loginbutton" onclick="logOutUser()"> Log out</button>
    Dette er brukersiden.
    ${model.app.loggedInUser.name}
    `;
}
function adminView() {
    document.getElementById('app').innerHTML = `
    <button class="loginbutton" onclick="logOutUser()"> Log out</button>
    Dette er adminsiden.
    ${model.app.loggedInUser.name}
    `;
}

// function logInUser(){

//     let user = model.inputs.loginPage.username;
//     let pw = model.inputs.loginPage.password;

//     model.app.currentPage = confirmUser(user, pw);
//     view();
// }

// function confirmUser(user, pw){

//     let foundUser = false;

//     model.users.forEach(element =>
//                                     {
//                                     if (element.name == user && element.password == pw)
//                                         {
//                                             model.app.loggedInUser = element;
//                                             foundUser = true;
//                                         }
//                                     }
//                                 );

//     if (!foundUser) { console.log("Cant find user"); return Pages.LOGIN; }

//     if (model.app.loggedInUser.isAdmin) { console.log("ADMIN"); return Pages.ADMIN }
//     else console.log("USER"); return Pages.USER ;
// }

// function logOutUser()
// {
//     model.app.currentPage = Pages.LOGIN;
//     view();
// }

// function rememberPassword()
// {
//     console.log("Exception in rememberPassword() - Not Implemented yet");
// }
