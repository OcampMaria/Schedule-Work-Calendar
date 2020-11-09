var hourViewStored = Number(window.localStorage.getItem("hourView"))
var SaveBtn = $(".saveBtn")

var currentDays = moment().format("dddd, MMM Do YYYY");
var currentHour = moment().format("h")
var hour = moment().hour()
let m = moment()

console.log(hour, "hour");
console.log(currentHour, "currentHour");

// current day is displayed at the top of the calendar
$("#currentDay").text(currentDays);


// each time block is color-coded to indicate whether it is in the past, present, or future.    

$(".row").each(function(){

    var value = parseInt($(this).val());
    console.log(value);
  
    
    if (value == hour) {
        $("textarea").addClass("present")
        console.log("present");
    } 
    else if (value <= hour) {
        $("textarea").addClass("Past")
       
        console.log("past");
    }
    else if (value >= hour) {
        $("textarea").addClass("future")
     
        console.log("future");
    }

})



$( ".btn" ).on( "click", function() {
    $("textarea").each(function(){

        localStorage.setItem("text", $("textarea").text);
        
    })
       
});



console.log(localStorage);
