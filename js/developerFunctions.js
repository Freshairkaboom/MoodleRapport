// Clamp Implementation
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// DEBUG STUFF
const debug = {

    useLoginTesting: true,
    defaultUSER: "Admin",
    defaultPW: "admin",

}

function clearRandomData()
{
    model.totalTasksMade = 0;
    model.tasks = [];
    view();
}

function generateRandomData()
{
    model.tasks = [];

    let amountToGenerate = 1000;
    let totalWeeks = model.weeks.length;
    let progressLength = 3; //Enum Progress has 3 properties
    let i = 0;

    while (amountToGenerate > 0)
    {
        let nextID = i;
        let randomWeek = Math.floor(Math.random() * totalWeeks);
        let taskCount = getTaskCountForWeek(randomWeek);

        // Distribute tasks with results skewed towards earlier weeks having a higher percentage of completed tasks compared to later weeks
        let distributionStrength = .2;
        let distributionFactor = 1 - ( Math.random() * (( randomWeek ) / ( totalWeeks * (1 * distributionStrength) )));
        let distribution = clamp(distributionFactor, 0, 1);

        // Randomize The data
        let randomTaskInWeek = Math.floor(Math.random() * taskCount);
        let randomProgress = Math.round((clamp(((Math.random() * distribution) * progressLength), 0, progressLength-1)));
        let randomStudent = Math.floor(Math.random() * model.users.length);

        // Populate task with random data
        let randomizedTask = { id: nextID,  weekIndex: randomWeek,  taskInWeek: randomTaskInWeek, progress: randomProgress, approved: false, student: randomStudent }

        // Check if adding the current task exceeds the maximum possible tasks for this week
        let duplicateTasks = 0;
        model.tasks.forEach(task => {
            if (task.weekIndex == randomizedTask.weekIndex && task.taskInWeek == randomizedTask.taskInWeek && task.student == randomizedTask.student)
                duplicateTasks++;
        })

        // If not, add the task to the list of tasks
        if (duplicateTasks < taskCount && taskCount != 0)
        {
            model.tasks.push(randomizedTask);
        }

        i++;
        amountToGenerate--;
    }

    model.totalTasksMade = model.tasks.length;

    view();
}
