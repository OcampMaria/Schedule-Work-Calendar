var hourViewStored = Number(window.localStorage.getItem("hourView"))
var SaveBtn = $(".saveBtn")
var currentDays = moment().format("dddd, MMM Do YYYY");
let m = moment()

// current day is displayed at the top of the calendar
$("#currentDay").text(currentDays);


// each time block is color-coded to indicate whether it is in the past, present, or future.                                 
    function colorCode() {
        //if present === .present
        //if future === .future
        //if past === .Past
        var currentHour = moment().hour();
        console.log(currentHour);

        if ($("button").val() == currentHour) {
            $("textarea").addClass("present")
            console.log("present");
        } 
        else if ($("button").val()<= currentHour) {
            $("textarea").addClass("Past")
            console.log("past");
        }
        else if ($("button").val()>= currentHour) {
            $("textarea").addClass("future")
            console.log("future");
        }
    }

    colorCode()


// WHEN I click the save button for that time block
//text for that event is saved in local storage
    $("button").on("click", function () {

    }) 

   
   





// WHEN I refresh the page