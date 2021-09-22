view();
logInUser(); // CALLING FOR DEVELOPMENT_TESTING
generateRandomTasks(); // CALLING FOR DEVELOPMENT_TESTING

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
    if (loggedInUserIsAdmin())
        if(!model.PageStates.selectedStudent) return;
    else
        if (model.app.loggedInUser == "") return;


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

    let _week = model.PageStates.selectedWeek;
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
    //let ms = Math.max(0, chatData.length - _length);
    let ms = 0;

    for (i = chatData.length-1; i >= 0; i--)
    {
        let commentator = chatData[i].whoCommented == undefined ? " " : '[' + chatData[i].whoCommented + ']';
        let timeStamp = chatData[i].timeStamp

        if (!chatData[i].isVisible)
        {
            if (isAdmin) html += `<span class="timeStamp"> ${timeStamp} (hidden) ${commentator} </span> ` + " " + chatData[i].msg + `<br>`;
        }
        else html += `<span class="timeStamp"> ${timeStamp} ${commentator} </span> ` + " " + chatData[i].msg + `<br>`;
    }

    return html;
}

function getUserNameFromId(whoCommented)
{
    return model.app.loggedInUser.name
}

function send(){

    let message = model.inputs.tempChatMessage;

    if (message == model.inputs.defaultChatMessage) return;

    let _user = loggedInUserIsAdmin() ?  model.PageStates.selectedStudent : model.app.loggedInUser.id;
    let _userName = model.app.loggedInUser.name;
    let _week = model.PageStates.selectedWeek;

    var newDate = new Date().toLocaleTimeString();

    let currentTimeAsString = newDate;

    let isMessageHidden = loggedInUserIsAdmin() ? model.chatBox.isHiddenBoxTicked : true;

    console.log("Message is visible: " + isMessageHidden);

    model.chatMsg.forEach(element =>{
        if (element.studentId == _user) {
            let length = element.msgs.length + 1;
            let newMessage = { week: _week, order: length, whoCommented: _userName, msg: message, timeStamp: currentTimeAsString, isVisible: isMessageHidden };

            element.msgs.push(newMessage);
        }
    });

    view();

    model.inputs.tempChatMessage = model.inputs.defaultChatMessage;
}

function setVisibilityStatus(isTicked) {

    model.chatBox.isHiddenBoxTicked = !isTicked;

    console.log(model.chatBox.isHiddenBoxTicked)
}
