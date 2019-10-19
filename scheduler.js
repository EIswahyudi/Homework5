// a. function to build scheduler Rows (buildRows) --> loop 
var tableEL = $("#table");
var columnEl = $("#columns");
var timeSchedule = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function buildRows() {
 for(i=0; i<timeSchedule.length; i++) {
    var tRow = $("<tablerow>").text(timeSchedule[i]);
    var tCol = $("<columns>").text()
    tableEL.append(tRow);
 }
buildRows() 
    
    //build HRML elements row 
}
// b. Set date at top of page (function showTodaysDate) --> moment.js
function showTodaysDate() {

}
// c. Save button event handler (function saveRow) uses localstorage 
function saveRow() {

}

// d. Change row styles (function updateRowStyle) moment.js
function updateRowStyle() {
    
    //TODO - finish 
    // i. on page load, check current time (hour) against rows in scheduler 
    

}

// 