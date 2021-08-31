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
