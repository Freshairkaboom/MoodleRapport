function userView() {


    model.PageStates.menuType = MenuType.WEEKS;

    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

        <div class="bannerContainer">
        <small>Fargeblind modus</small> <img src="https://icon-library.com/images/color-wheel-icon-png/color-wheel-icon-png-4.jpg" width="20px" height="20px" onclick="toggleColorBlindMode()">
        |
            ${model.app.loggedInUser.name}
            <button class="button-primary" onclick="logOutUser()"> Log out</button>
        </div>

        <div class="navigationContainer">

                Modul 1<button class="button-primary2">Navigasjon</button>
                ${navigationMenu()}

        </div>

        <div class="titleContainer">
                Velkommen! Her finner du oppgavene for ${title()}
        </div>

        <div class="bodyContainer">
        <div class="innerBodyContainer">
            ${body()}
        </div>

    </div>

        <div class="chatContainer" max-width="200px" max-height="200px">
            <div class="innerChatContainer">
                <input type="text" value="${model.inputs.defaultChatMessage}" type="text" onclick="this.value=''" oninput="model.inputs.tempChatMessage=this.value"></input>
                <button class="button-primary" onclick="send()">Send</button>
                </br>
                ${chatBox()}
            </div>

        </div>

    </div>
`;
}
