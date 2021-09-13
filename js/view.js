// Student Views hvor admin ser alle oppgavene per student
// Title funksjon
// Kommentar felt admin og user


// UserView med "info side"

// user View med oppgavene og radio knapper for å endre Started Not Started Finished
// Ha en sjekk for om logget inn bruker er admin eller user, og vise approve-button/radio-buttons i forhold til dette

/*

function displayStudentInfoView()
{
    showRadioButtons();
    showApprovedButtons();
}

function showRadioButtons()
{
    if (loggedInUser != UserInfoIsDisplayedFor) return;
}

function showApprovedButtons()
{
    if (loggedInUser.isAdmin == false) return;

    return html "approve button her med onclick osv"
}



*/


view();
logInUser(); // CALLING FOR DEVELOPMENT_TESTING
//generateRandomData(); // DEVELOPER_FUNCTION

function view() {

    document.body.innerHTML = `<div id="app"></div>`;

    switch (model.app.currentPage)
    {
        case Pages.LOGIN:
            loginView();
            break;

        case Pages.USER:
            userView();
            break;

        case Pages.ADMIN:
            adminView();
            break;
    }
}





function changeColour(color, index, task)
{
    console.log("Color: " + color + " Index: " + index + " Task: " + task);
    console.log("Exception - Not Implemented yet");
}







/*
<div id= "genre">
What do you bust a move to?
<br>
<br>
<form name="music" method="post" action="">
<p>
<input type="radio" name="music" value="radio" onClick="changeColour('b')">Blues
<br>
<input type="radio" name="music" value="radio" onClick="changeColour('r')">Rock
<br>
<input type="radio" name="music" value="radio" onClick="changeColour('p')">Pop
<br>
</form>
</div>


function changeColour(value)
{
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#FF0000";
        break;
        case 'r':
            color = "#0000FF";
        break;
        case 'p':
            color = "#FF00FF";
        break;
    }
    document.body.style.backgroundColor = color;
}

*/
