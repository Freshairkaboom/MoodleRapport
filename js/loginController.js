function logInUser(_user, _pw){
    let user;
    let pw;

    //#region DEBUG_ARGUMENTS
    if (_user == null) user = model.inputs.loginPage.username;
    else user = _user;

    if (_pw == null) pw = model.inputs.loginPage.password;
    else pw = _pw;
    //#endregion

    model.app.currentPage = confirmUser(user, pw);
    view();
}

function confirmUser(user, pw){

    let foundUser = false;

    model.users.forEach(element =>
                                    {
                                    if (element.name == user && element.password == pw)
                                        {
                                            model.app.loggedInUser = element;
                                            foundUser = true;
                                        }
                                    }
                                );

    if (!foundUser) { console.log("Cant find user"); return Pages.LOGIN; }

    if (model.app.loggedInUser.isAdmin) { console.log("ADMIN"); return Pages.ADMIN }
    else console.log("USER"); return Pages.USER ;
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
