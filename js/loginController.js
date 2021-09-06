function logInUser()
{
    let user;
    let pw;

    //#region DEVELOPER_TESTING
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


function userNameMatch(model_user_name, _user)
{
    // ignores case sensitivity
    _user = _user.toLowerCase();
    model_user_name = model_user_name.toLowerCase();

    if (_user == model_user_name) return true;
    else return false;
}

function confirmUser(_user, _pw)
{

    let foundUser = false;
    let isDisabled = false;

    model.users.forEach(user => {
        if (userNameMatch(user.name, _user) && user.password == _pw)
        {
            if (user.isDisabled)
            {
                isDisabled = true;
                model.inputs.loginPage.errorMessage = ErrorMessages.USER_DISABLED;
            }
            else
            {
                foundUser = true;
                model.inputs.loginPage.errorMessage = ErrorMessages.NONE;
                model.app.loggedInUser = user;
            }
        }
    });

    if (!foundUser && !isDisabled) { model.inputs.loginPage.errorMessage = ErrorMessages.USER_WRONG_INFO; return Pages.LOGIN; }
    else if (!foundUser && isDisabled) { return Pages.LOGIN; }

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
