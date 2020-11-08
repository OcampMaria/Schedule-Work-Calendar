var hourViewStored = Number(window.localStorage.getItem("hourView"))
var SaveBtn = $(".saveBtn")

var currentDays = moment().format("dddd, MMM Do YYYY");
var currentHour = moment().format("h:00 a")
var hour = moment().hour()
let m = moment()

console.log(hour, "hour");
console.log(currentHour, "currentHour");

// current day is displayed at the top of the calendar
$("#currentDay").text(currentDays);


// each time block is color-coded to indicate whether it is in the past, present, or future.    



    function colorCode() {
        //if present === .present red
        //if future === .future green
        //if past === .Past gray
      
        

        if ($("button").val() == hour ) {
            $("textarea").addClass("present")
            console.log("present");
        } 
        else if ($("button").val() <= hour) {
            $("textarea").addClass("Past")
            console.log("past");
        }
        else if ($("button").val() > hour) {
            $("textarea").addClass("future")
            console.log("#number");
        }
    }

    colorCode()


// WHEN I click the save button for that time block
//text for that event is saved in local storage
    $("button").on("click", function () {
       var content =  $("textarea").val()
    
        localStorage.setItem ("mycontent", content)

    }) 

    
   





// WHEN I refresh the page