var hourArray = ["9","10","11","12","13","14","15","16","17"]
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


    var value = parseInt($(this).attr("id"));
   console.log(value);
    
    if (value === hour) {
        $(this).addClass("present")
      
    } 
    else if (value <= hour) {
        $(this).addClass("Past")
       
    }
    else if (value >= hour) {
        $(this).addClass("future")
     
    }
 
})



$(".saveBtn" ).on( "click", function() {
    var textInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log(textInput, hour);

    localStorage.setItem(hour, textInput)
});

function getItems() {
    for (var i=0; i<hourArray.length; i++){
        $(`#${hourArray[i]} .description`).val(localStorage.getItem(hourArray[i]))
    }
}


getItems()

