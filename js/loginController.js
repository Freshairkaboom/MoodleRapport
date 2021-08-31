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
