function logInUser(){

    let user = model.inputs.loginPage.username;
    let pw = model.inputs.loginPage.password;

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
