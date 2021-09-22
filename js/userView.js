function userView() {

    let size = 20;
    model.PageStates.menuType = MenuType.WEEKS;

    document.getElementById('app').innerHTML = `
    <div class="pageContainer">

        <div class="bannerContainer">
        <small>Color blind mode</small> <img src="https://icon-library.com/images/color-wheel-icon-png/color-wheel-icon-png-4.jpg" width="20px" height="20px" onclick="toggleColorBlindMode()">
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
            <br>
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.red};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Ikke Startet oppgaven.

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.yellow};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Startet oppgaven.

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.green};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Ferdig med oppgaven.
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.black};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Oppgaven er ikke godkjent.
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.white};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg> = Oppgaven er godkjent.
        </div>

        <div class="chatContainer">
            <input type="text" value="${model.inputs.defaultChatMessage}" type="text" onclick="this.value=''" oninput="model.inputs.tempChatMessage=this.value"></input>
            <button class="button-primary" onclick="send()">Send</button>
            </br>
            ${chatBox()}
        </div>
    </div>
`;
}
