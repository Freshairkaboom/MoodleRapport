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
     ${displayChatContainer()}
    </div>
    `;

    if (loggedInUserIsAdmin())
        fillPieCharts();
    
    
    if(model.PageStates.selectedStudent == '') return;
    let input = document.getElementById("chatInput");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            send();
        };
    });

}

function displayChatContainer() {
    
    let html = `
    <div class="chatContainer" max-width="200px" max-height="200px">
    <input id="chatInput" type="text" value="${model.inputs.defaultChatMessage}"  type="text" onclick="this.value=''" oninput="model.inputs.tempChatMessage=this.value"></input>
    <button class="button-primary" onclick="send()">Send</button>
    <input type="checkbox" ${isVisible()} name="Should message be visible?" onclick="isVisible()">Should task be visible?</input>
    </br>
     ${chatBox()}
    
    </div>`;

    if(model.PageStates.selectedStudent == '') return '';

    else return html;
    
}

/*{ <input id="myInput" value="Some text..">
<button id="myBtn" onclick="javascript:alert('Hello World!')">Button</button>
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
*/
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
