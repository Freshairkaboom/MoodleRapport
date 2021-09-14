function adminView() {
    let size = 20;
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
        <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png" width="20px" height="20px" onclick="toggleColorBlindMode()">
    </div>

    <div class="bodyContainer">
        ${body()}

    </div>
    </div>
    `;

    if (loggedInUserIsAdmin())
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
