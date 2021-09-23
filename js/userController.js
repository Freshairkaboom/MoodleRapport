function addColorBoxes()
{
    let html = "";

    let size = 20;

    html += `<th>
            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.red};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.yellow};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>

            <svg width="${size}" height="${size}">
            <rect width="${size}" height="${size}" style="fill:${Color.green};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>

            </br></span></th>
            `;

    return html;
}

function changeColour(color, index, _progress)
{
    let task = findTaskByIndex(index);

    if (task == null) return;

    task.progress = _progress;
}

function createColorExplanations() {
    if(loggedInUserIsAdmin()) return "";

    let html = '';
    let size = 20;

    html += `<br>
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
    `;


    return html;
}

function setDisplayedTasks(week, _student)
{
    let _data = [];
    let tasksThisWeek = getTaskCountForWeek(week);


    model.displayedTaskId = [];

    model.tasks.forEach( task => {
        if (task.weekIndex == week && task.student ==  _student)
        {
            if (!model.displayedTaskId.includes(task.id))
                model.displayedTaskId.push(task.id);
        }
    })

    let _taskInWeek = 0;
    if (model.displayedTaskId.length < tasksThisWeek)
    {
        for (i = 0; i < tasksThisWeek; i++)
        {


            if (!model.displayedTaskId.includes(i+1))
            {
                model.totalTasksMade++;
                let newTask = { id: model.totalTasksMade,  weekIndex: week,  taskInWeek: i, progress: Progress.NOTSTARTED, approved: false, student: _student };
                model.displayedTaskId.push(newTask.id);
                model.tasks.push(newTask);
            }
        }
    }

    model.displayedTaskId = model.displayedTaskId.sort((a, b) => a - b);
}
