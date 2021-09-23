function adminView() {
    let size = 20;
    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

        <div class="bannerContainer">
        <small>Fargeblind modus</small> <img src="https://icon-library.com/images/color-wheel-icon-png/color-wheel-icon-png-4.jpg" width="20px" height="20px" onclick="toggleColorBlindMode()">
            |
            ${model.app.loggedInUser.name}
            <button class="button-primary" onclick="logOutUser()"> Log out</button>
        </div>

        <div class="navigationContainer">
            <div class="innerNavigationContainer">
            Modul 1<button class="button-primary" onclick="swapMenuItem()">${swapButtonName()}</button>
             ${navigationMenu()}
             </div>
         </div>

        <div class="titleContainer">

            ${title()}

        </div>

        <div class="bodyContainer">
            <div class="innerBodyContainer">
                ${body()}
            </div>

        </div>
        <div>
            ${displayChatContainer()}
        </div>
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

function isCheckBoxTicked()
{
    if (model.chatBox.isHiddenBoxTicked) return "checked";
    else return "";
}

function isCheckBoxTickedAsBool()
{
    if (model.chatBox.isHiddenBoxTicked) return true;
    else return false;
}
function displayChatContainer() {

    let html = `
    <div class="chatContainer" max-width="200px" max-height="200px">
    <div class="innerChatContainer">
    <input id="chatInput" type="text" value="${model.inputs.defaultChatMessage}"  type="text" onclick="this.value=''" oninput="model.inputs.tempChatMessage=this.value"></input>
    <button class="button-primary" onclick="send()">Send</button>
    <input type="checkbox" ${isCheckBoxTicked()} name="Should message be visible?" onclick="setVisibilityStatus(${isCheckBoxTickedAsBool()})">Skal meldingen vises?</input>
    </br>
     ${chatBox()}
</div>
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
