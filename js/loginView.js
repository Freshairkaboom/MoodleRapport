function loginView() {

    if (!navigator.userAgent.includes('Chrome')) {
        document.getElementById('app').innerHTML = `<a href="https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjwhaaKBhBcEiwA8acsHMd8ujKvoM-X1qXoPkZVnW19tCidroR0k6CpbarEeqGWhwZu4IimSRoCn1cQAvD_BwE&gclsrc=aw.ds">Download Chrome you fool!</a>`;
      }
    else if (navigator.userAgent.includes('Microsoft Edge')) {
        document.getElementById('app').innerHTML = `<a href="https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjwhaaKBhBcEiwA8acsHMd8ujKvoM-X1qXoPkZVnW19tCidroR0k6CpbarEeqGWhwZu4IimSRoCn1cQAvD_BwE&gclsrc=aw.ds">Too edgy for me, download Chrome</a>`;
      }
    else
    {
        document.getElementById('app').innerHTML = `
        <img src="https://www.getacademy.no/img/GET_ACADEMY_VEKTOR_LOGO_2021.e961189a.svg" width="200px" height="200px"></img><br>
        <div class="loginContainer">

        <input id="username" type="text" value="Username" onclick="this.value=''" onchange="model.inputs.loginPage.username=this.value"></input> Forgotten username or password?
        </br>
        <input id="password" type="password" value="Password" onclick="this.value=''" onchange="model.inputs.loginPage.password=this.value"></input> Cookies must be enabled in your browser
        </br>
        ${model.inputs.loginPage.errorMessage}
        </br>
        <button class="button-primary" onclick="logInUser()"> Login</button>
        </br>


        <input type="checkbox" id="loginCheckBox" onclick="rememberPassword()">Remember Password
       </hr>

       </br>
       Moodle Rapport early access ${APP_VERSION_NUMBER}
       </div>

       `;
    }
}
