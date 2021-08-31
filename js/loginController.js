function logInUser(_user, _pw){
    let user;
    let pw;

    console.log(_user);

    //#region DEBUG_ARGUMENTS
    if (_user == null) //user = model.inputs.loginPage.username;
    else { user = _user; model.defaultUSER = null };

    console.log(model.defaultUSER);

    if (_pw == null) //pw = model.inputs.loginPage.password;
    else { pw = _pw; model.defaultPW = null };
    //#endregion

    model.app.currentPage = confirmUser(user, pw);
    view();
}

function confirmUser(user, pw){

    let foundUser = false;

    model.users.forEach(e => {
        if (e.name == user && e.password == pw)
            { model.app.loggedInUser = e; foundUser = true; }
    });

    if (!foundUser) { console.log("Cant find user"); return Pages.LOGIN; }

    if (model.app.loggedInUser.isAdmin) { console.log("ADMIN"); return Pages.ADMIN }
    else { console.log("USER"); return Pages.USER; }
}

function logOutUser()
{
    model.app.currentPage = Pages.LOGIN;
    view();
}

function rememberPassword()
{
    console.log("Exception in rememberPassword() - Not Implemented yet");
}
