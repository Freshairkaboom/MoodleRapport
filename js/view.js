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
generateRandomTasks();
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

function chatBox()
{

    if(!model.PageStates.selectedStudent) return;

    let userId;

    switch (loggedInUserIsAdmin())
    {
        case true:
            userId = model.PageStates.selectedStudent;
            if (userId == "") userId = -1;
            break;

        case false:
            userId = model.app.loggedInUser.id;
            break;
    }

    return getChatData(userId);
}

function getChatData(_userId) {

    if (_userId == -1) { console.log("No user selected"); return; }

    let chatLogId;

    for (i = 0; i < model.chatMsg.length; i++)
    {
        if (model.chatMsg[i].studentId == _userId)
        {
            chatLogId = i;
            i = model.chatMsg.length;
        }
    }

    let _week = model.PageStates.selectedWeek; // hent denne på en annen måte
    let _messages = [];

    if (model.chatMsg[chatLogId] == undefined) { console.log("Log contains no messages"); return; }

    model.chatMsg[chatLogId].msgs.forEach( message => {
        if(message.week == _week)
        {
            _messages.push(message);
        }
    })

    _messages.sort(function(a, b) {
        return parseFloat(a.order) - parseFloat(b.order);
    });


    return drawChatBox(_messages);

}

function drawChatBox(chatData){
    let html = ``;
    let isAdmin = loggedInUserIsAdmin();
    let _length = 5;

    let ms = Math.max(0, chatData.length - _length);

    for (i = ms; i < chatData.length; i++)
    {
        if (!chatData[i].isVisible)
        {
            if (isAdmin) html += "(" + chatData[i].order + ") (hidden) " + getUserNameFromId(chatData[i].whoCommented) + chatData[i].msg + `<br>`;
        }
        else html += "(" + chatData[i].order + ") " +  chatData[i].msg + `<br>`;
    }

    return html;
}

function getUserNameFromId(whoCommented)
{
    //whoCommented is the ID of the user

    return "Name of commenter";
}

function send(){

    let message = model.inputs.tempChatMessage;

    if (message == model.inputs.defaultChatMessage) return;

    let student = loggedInUserIsAdmin() ? model.PageStates.selectedStudent : model.app.loggedInUser.id;
    let _week = model.PageStates.selectedWeek;

    let isTrue = true;

    let html = ``;

    model.chatMsg.forEach(element =>{
        if (element.studentId == student) {
            let length = element.msgs.length + 1;
            let newMessage = { week: _week, order: length, whoCommented: student, msg: message, isVisible: isTrue };

            element.msgs.push(newMessage);
        }
    });

    view();

    model.inputs.tempChatMessage = model.inputs.defaultChatMessage;
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
