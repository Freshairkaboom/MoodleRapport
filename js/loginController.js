function logInUser()
{
    let user;
    let pw;

    //#region DEBUG_ARGUMENTS
    if (debug.useLoginTesting)
    {
        user = debug.defaultUSER;
        pw = debug.defaultPW;
        debug.useLoginTesting = false;
    }
    else
    {
        user = model.inputs.loginPage.username;
        pw = model.inputs.loginPage.password;
    }
    //#endregion

    model.app.currentPage = confirmUser(user, pw);
    view();
}

function confirmUser(_user, _pw)
{
    let foundUser = false;

    model.users.forEach(user => {
        if (user.name == _user && user.password == _pw && !user.isDisabled)
            { model.app.loggedInUser = user; foundUser = true; }
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
