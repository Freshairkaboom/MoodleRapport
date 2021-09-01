function listWeeks()
{
    let list = '<ul>';

    model.weeks.forEach(week =>
    {
        let _weekText = `Uke ${week.weekId}`;
        if (week.weekId-1 == model.PageStates.selectedWeek) _weekText = `=> UKE ${week.weekId} <=`;

        list += `<li class="week" onclick="updateSelectedWeek(${week.weekId})">` + `${_weekText} ` + `</li>`;
    })

    list += '</ul>';

    return list;
}

function updateSelectedWeek(_week)
{
    model.PageStates.selectedWeek = _week-1;
    view();
}

function title() {
    let html = '';
    html += `
        Tittel
    `;

    return html;
}
