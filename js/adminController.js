function listStudents()
{
    let list = '<ul>';

    model.users.forEach(user =>
    {
        if (!user.isAdmin && !user.isDisabled)
        {
            let _userText = `${user.name}`;
            if (user.id == model.PageStates.selectedStudent) _userText = `<strong> ${user.name} </strong>`;

            list += `<li class="week" onclick="selectStudent(${user.id})">${_userText}</li>`;
        }
    })

    list += '</ul>';

    return list;
}

function selectStudent(user_ID)
{
    model.PageStates.selectedStudent = user_ID;

    view();
}

function swapButtonName()
{
    if (model.PageStates.menuType == MenuType.STUDENT) return "Uker";
    else return "Studenter";
}
function swapMenuItem()
{
    model.PageStates.menuType = (model.PageStates.menuType + 1) % 2;

    view();
}

function navigationMenu() {

    let html = '';

    switch (model.PageStates.menuType)
    {
        case MenuType.WEEKS:

            html += `
            ${listWeeks()}
            `;

            break;

        case MenuType.STUDENT:

            html += `
            ${listStudents()}
            `;

            break;
    }

    return html;
}

function addAdminColor(progress)
{
    let html = "";
    let size = 20;
    let color = getMatchingColor(progress);

    if (loggedInUserIsAdmin())
    {
        html += `<svg width="${size}" height="${size}">
        <rect width="${size}" height="${size}" style="fill:${color};stroke-width:3;stroke:rgb(100,0,100)" />
        </svg>`;
    }

    return html;
}

function createStudentPage()
{
    let _week = model.PageStates.selectedWeek;
    let _student = model.PageStates.selectedStudent;


    let weekOutOfRange = (_week < 0 || _week >= model.weeks.length);

    if (weekOutOfRange || _student == "") { console.log(_week + "/" + _student);
    return; }


    setDisplayedTasks(_week, _student);


    let html = createWeekButtons();
    html += createTaskList();

    if (html != "")
    return html
    else return "";
}
