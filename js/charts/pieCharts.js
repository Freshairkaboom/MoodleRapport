function getTaskCountForWeek(_week)
{
    let totalTasks;
    model.weeks.forEach(week => {
        if (week.weekId == _week+1) //Adding one because our weekId starts at 1, while the week passed into function is an index
            totalTasks = week.taskCount;
    })

    return totalTasks;
}

function getChartData(_week, _student)
{
    let week = _week;
    let student = _student;

    // Set up data for the pie chart with values at zero
    let pieData = [
        { x: 'Ikke Startet', value: 0, normal: {fill: "#FF0000",}},
        { x: 'Startet', value: 0, normal: {fill:      "#FFFF00",}},
        { x: 'Ferdig', value: 0, normal: {fill:       "#32CD32",}}]

    // Grab all current tasks for the student and week passed into this function. Also grabbing the amount of tasks for the specific week.
    let tempData = getDataForStudent(week, student);
    let remainingTasks = getTaskCountForWeek(week);

    // Sort through the data and assign it to the proper pie-pieces. Subtract from remaining tasks for each task in list.
    tempData.forEach(task => {
      pieData[task.progress].value++; remainingTasks--;
    })

    //Finally assign any leftover tasks to the not started category since those may or may not be included in the tempData list.
    pieData[0].value += remainingTasks;

    let finalData = [];
    // Loop through the sorted data and discard anything without a value. Silly to display a graph with nothing
    pieData.forEach(sector => {
        if (sector.value > 0) finalData.push(sector);
    });

    // Return the finalized pie data for this particular student back to the chart generator
    return finalData;
}

function fillPieCharts()
{
    if (!document.getElementById("chartParentContainer")) return;

    let week = model.PageStates.selectedWeek;

    model.users.forEach(user => {
        if (!user.isAdmin && !user.isDisabled)
        {
            // Generate the data
            let id = user.id.toString();
            let data = getChartData(week, user.id);
            let newChart = anychart.pie();

            // Assign the data
            newChart.container(id);
            newChart.data(data);

            // Set the properties
            setChartProperties(newChart);

            // Draw the chart
            newChart.draw();
        }
    })
}

//#region Chart Properties
function setChartProperties(newChart)
{
    // Set the properties
    newChart.legend(false);
    newChart.radius("40%");
    newChart.background().stroke("1 black");
    newChart.background().fill("#fff", 0);

    // Set the labels
    var labels = newChart.labels();
    labels.enabled(true);
    labels.fontColor("black");
    labels.fontSize("10")
}


/* DIV RELATED */
function createChartContainers() {
    let html = '<div id="chartParentContainer">';

    model.users.forEach(user => {
        if (!user.isAdmin && !user.isDisabled)
            html += ` <div id=${user.id.toString()} class="student" style="width: 20rem; height: 20rem;">${user.name}</div>`;
    })

    
    html += "</div>";
    return html;
}

function getDataForStudent(week, student)
{
    let userData = [];

    model.tasks.forEach(element => {
        if (element.weekIndex == week && element.student == student)
        {
            userData.push(element);
        }
    })

    return userData;
}
