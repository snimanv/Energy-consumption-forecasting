// STEP CHART
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Energy',  'Avg Consumption', 'Your Consumption'],
    ['10',            8.4,               7.9],
    ['15',            6.9,               6.5],
    ['20',            6.5,               6.4],
    ['25',            4.4,               6.2], 
    ['30',            4.4,               6.2]
]);

var options = {
    title: 'Energy Consumption',
    vAxis: {title: 'Your Energy Consumed'},
    isStacked: true
};

var step_chart = new google.visualization.SteppedAreaChart(document.getElementById('main__step_chart'));

step_chart.draw(data, options);
}


// PIE CHART
// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
// var data = google.visualization.arrayToDataTable([
//     ['Task', 'Hours per Day'],
//     ['Work',     11],
//     ['Eat',      2],
//     ['Commute',  2],
//     ['Watch TV', 2],
//     ['Sleep',    7]
// ]);

// var options = {
//     title: 'My Daily Activities',
//     is3D: true,
// };

// var pie_chart = new google.visualization.PieChart(document.getElementById('main__pie_chart'));
// pie_chart.draw(data, options);
// }