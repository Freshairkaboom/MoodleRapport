function adminView() {
    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

    <div class="bannerContainer">
    ${model.app.loggedInUser.name}
    <button class="button-primary" onclick="logOutUser()"> Log out</button>
    </div>

    <div class="navigationContainer">
        Modul 1<button class="button-primary" onclick="swapMenuItem()">${swapButtonName()}</button>
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

    if (loggedInUserIsAdmin() && model.PageStates.menuType == MenuType.WEEKS)
        fillPieCharts();
}




function loggedInUserIsAdmin()
{
    let foundAdmin = false;
    model.users.forEach(user => {
        if (model.app.loggedInUser.name == user.name)
        {
            if (user.isAdmin) foundAdmin = true;
        }
    })

    return foundAdmin;
}
