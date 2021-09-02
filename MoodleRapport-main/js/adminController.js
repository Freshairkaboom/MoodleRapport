function listStudents()
{
    let list = '<ul>';

    model.users.forEach(user =>
    {
        if (!user.isAdmin && !user.isDisabled)
        {            
            list += `<li class="week" onclick="selectStudent(${user.id})">${user.name}</li>`;
        }
            
    })

    list += '</ul>';

    return list;
}

function selectStudent(user_ID)
{
    console.log("Clicked on student with ID: " + user_ID);
}


// Admin controller
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
