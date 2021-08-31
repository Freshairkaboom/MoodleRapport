// DEPRECATED FUNCTIONS
// DEPRECATED FUNCTIONS
// DEPRECATED FUNCTIONS

// function updateMenuList() {

//     list = lists.students; //lists.weeks
//     html = '';

//     foreach(item in list)
//     {
//         html += item;
//     }

//     menu.innerhtml = html;
// }

// function getTaskCountForWeek(week)
// {
//     let totalTasks;
//     model.weeks.forEach(element => {
//         if (element.weekId == week)
//         totalTasks = element.taskCount;
//     })

//     return totalTasks;
// }

// function getChartData(_week, _student)
// {
//     // set the data
//     // chart library needs data in the following format:
//     /*
//         let data = [
//         {x: "White", value: 223553265},
//         {x: "Black or African American", value: 38929319},
//         {x: "American Indian and Alaska Native", value: 2932248},
//         {x: "Asian", value: 14674252},
//         {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
//         {x: "Some Other Race", value: 19107368},
//         {x: "Two or More Races", value: 9009073}
//       ];
//       */

//     let week = _week;
//     let student = _student;
//     let tasksThisWeek = getTaskCountForWeek(week);

//     let notStartedObj = {
//         x: 'Not Started',
//         value: 0,
//         normal: {fill: "#FF0000",}
//     }
//     let startedObj = {
//         x: 'Started',
//         value: 0,
//         normal: {fill: "#FFFF00",}
//     }
//     let finishedObj = {
//         x: 'Finished',
//         value: 0,
//         normal: {fill: "#32CD32",}
//     }

//     // let week = 1;
//     // let student = 0;
//     //let tasksThisWeek = getTaskCountForWeek(week);

//     let tempData = getDataForStudent(0, 1);

//     console.log(tempData.length);
//     console.log(tempData[0]);
//     console.log("Tasks this week:" + tasksThisWeek);
//     console.log("#############");

//     let remainingTasks = tasksThisWeek;

//     for (i = 0; i < tempData.length; i++)
//     {
//         if (tempData[i].progress == Progress.STARTED)
//         {
//             startedObj.value++;
//             remainingTasks--;
//         }
//         else if (tempData[i].progress == Progress.FINISHED)
//         {
//             finishedObj.value++;
//             remainingTasks--;
//         }
//         else if (tempData[i].progress == Progress.NOTSTARTED)
//         {
//             notStartedObj.value++;
//             remainingTasks--;
//         }
//     }
//     notStartedObj.value += remainingTasks;

//     let finalData = [];

//     if (notStartedObj.value > 0)
//         finalData.push(notStartedObj);
//     if (startedObj.value > 0)
//         finalData.push(startedObj);
//     if (finishedObj.value > 0)
//         finalData.push(finishedObj);

//     console.log(finalData)

//     return finalData;
// }


// //createPieChart();
// function createPieChart() {
//     anychart.onDocumentReady(function() {


//         let data = getChartData(0, 1);
//         // create the chart

//         let chart = anychart.pie();

//         // set the chart title
//         // chart.title("Student 0");

//         // add the data
//         chart.data(data);

//         // display the chart in the container
//         chart.container('container');
//         chart.draw();
//         chart.legend(false);
//         chart.radius("40%");
//         chart.background().stroke("1 red");
//         chart.background().fill("#fff", 0);

//         var labels = chart.labels();
//         labels.enabled(true);
//         labels.fontColor("black");
//         labels.fontSize("6")



//         // let chart_2 = anychart.pie();
//         // // chart_2.title("Student 2");

//         // chart_2.data(data);
//         // chart_2.container('container2');
//         // chart_2.draw();

//       });
// }




/*-----------------------------------------------------*
 *     generateRandomData() with Validation Checks     *
 *-----------------------------------------------------*/

// function generateRandomData()
// {  
//     // Clamp Implementation
//     const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//     model.tasks = [];
    
//     let amountToGenerate = 800;
//     let totalWeeks = model.weeks.length;
//     let progressLength = 3; //Enum Progress has 3 properties
//     let i = 0;


//     // For verification of data distribution
//     let _weekData = [totalWeeks];
//     let _countData = [totalWeeks];

//     let _completedTasks = [];

//     for (i = 0; i < totalWeeks; i++)
//     {
//         let tasksForWeek = [[0],[0],[0]];
//         _completedTasks[i] = tasksForWeek;
//     }
    
//     for (i = 0; i < totalWeeks; i++)
//     {
//         _weekData[i] = 0;
//         _countData[i] = 0;
//     }
//     // End of verification

//     while (amountToGenerate > 0)
//     {        
//         let nextID = i;
//         let randomWeek = Math.floor(Math.random() * totalWeeks);
//         let taskCount = getTaskCountForWeek(randomWeek);

//         // Distribute tasks with results skewed towards earlier weeks having a higher percentage of completed tasks compared to later weeks
//         let distributionStrength = .75;
//         let distributionFactor = 1 - ( Math.random() * (( randomWeek ) / ( totalWeeks * (1 - distributionStrength) )));
//         let distribution = clamp(distributionFactor, 0, 1);



//         // VERIFICATION_LOGGING
//         _weekData[randomWeek] += distribution;
//         _countData[randomWeek] += 1;
//         // VERIFICATION_LOGGING



//         // Randomize The data

//         let randomTaskInWeek = Math.floor(Math.random() * taskCount);
//         let randomProgress = Math.round((clamp(((Math.random() * distribution) * progressLength), 0, progressLength-1)));        
//         let randomStudent = Math.floor(Math.random() * model.users.length);

//         // Populate task with random data
//         let randomizedTask = { id: nextID,  weekIndex: randomWeek,  taskInWeek: randomTaskInWeek, progress: randomProgress, approved: false, student: randomStudent }

//         // Track tasks with same Week/taskID as the currently added task to prevent tasks from exceeding maximum possible tasks for week
//         let duplicateTasks = 0;
//         model.tasks.forEach(task => {
//             if (task.weekIndex == randomizedTask.weekIndex && task.taskInWeek == randomizedTask.taskInWeek)
//                 duplicateTasks++;              
//         })

        
//         if (duplicateTasks <= taskCount)
//         {
//             model.tasks.push(randomizedTask);
//             _completedTasks[randomizedTask.weekIndex][randomizedTask.progress]++; // VERIFICATION_LOGGING
//         }
            

//         i++;
//         amountToGenerate--;
//     }

//     // Logging verification data
//     console.log("Weekly Distribution:");
//     for (i = 0; i < _weekData.length; i++)
//     {
//         let total = _weekData[i] / _countData[i];
//         console.log("Week " + i + ": " + total);
//     }
//     console.log("*******************************");
//     console.log(" ");
//     console.log("*******************************");


//     for (i = 0; i < _completedTasks.length; i++)
//     {
//         console.log("Completed tasks week " + i + ": " + _completedTasks[i][2]);
//         console.log("Started tasks week " + i + ": " + _completedTasks[i][1]);
//         console.log("Not started tasks week " + i + ": " + _completedTasks[i][0]);
//         console.log("______________");
//     }
    
//     // End of verification

//     view();
// }