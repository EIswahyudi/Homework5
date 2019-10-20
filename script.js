
// a. function to build scheduler Rows (buildRows) --> loop 
var timeSchedule = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var table = $("#table");


function buildRows() {
    for (var i = 0; i < timeSchedule.length; i++) {
    //build table row 
        var tRow = $("<tr class='row'>");
    //build table data inside tRow (time, text, and save button)
        var tData = $("<td>").text(timeSchedule[i]);
        var button = $("<button class='saveBtn'>").text("Save");
        var textInput = $("<input type='text'>");
    // stored userinput inside text 
        var storedItem = localStorage.getItem(timeSchedule[i]);
        if (storedItem !== null) {
            textInput.val(storedItem);
        }
    // populate row, time, textbox, and save button on window
        tData.append(textInput);
        tData.append(button);
        tRow.append(tData);
        table.append(tRow); 
    }
}
buildRows();
//build HRML elements row 

// b. Set date at top of page (function showTodaysDate) --> moment.js
var curDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(curDay);

    // c. Save button event handler (function saveRow) uses localstorage 
    $(".saveBtn").on("click", function() {
        
    var userInput = $(this).parent().find("input").val();
    // time of the input put in 
    var keyInput = $(this).parent()[0].firstChild.data;
    // saves the userinput and the key(time)
    localStorage.setItem(keyInput, userInput);
    console.log(userInput , keyInput);
    
    })





