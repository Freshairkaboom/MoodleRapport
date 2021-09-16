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

    console.log("Color: " + color + " Index: " + index + " Task: " + _progress);
    console.log("Exception - Not Implemented yet");
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
