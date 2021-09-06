function listWeeks()
{
    let list = '<ul>';

    model.weeks.forEach(week =>
    {
        let _weekText = `${week.description}`;
        if (week.weekId-1 == model.PageStates.selectedWeek) _weekText = `=> ${week.description} <=`;

        list += `<li class="week" onclick="updateSelectedWeek(${week.weekId})">` + `${_weekText} ` + `</li>`;
    })

    list += '</ul>';

    return list;
}

function updateSelectedWeek(_week)
{
    model.PageStates.selectedStudent = "";
    model.PageStates.selectedWeek = _week-1;
    view();
}

function title() {

    let title = "";
    let navn = "";

    model.weeks.forEach(week => {
        let _week = week.weekId - 1;

        if (_week == model.PageStates.selectedWeek)
        {
            title = week.description;
        }

    })

  
    let html = '';
    html += `
        ${title}
        
    `;

    return html;
}

function getMatchingColor(progress)
{
    if (progress == Progress.NOTSTARTED) return Color.red;
    else if (progress == Progress.STARTED) return Color.yellow;
    else if (progress == Progress.FINISHED) return Color.green;
    else return Color.default;
}
