// Displays the current date
var todaysDate = moment().format('dddd, MMMM Do, YYYY');
var timeEl = $("#todaysDate").text(todaysDate)

// Tracks time (hours)
var currentTime = moment().format("HH")
console.log(currentTime)

// Changes color of time blocks depending on time of day
for(i=8;i<=17;i++){
    var selectorString = "#" + [i]
    console.log(selectorString)
    var selectedHour = $(selectorString).attr("timeValue")
    console.log(selectedHour)
    if(selectedHour < currentTime){
        $(selectorString).removeClass("future")
        $(selectorString).removeClass("present")
        $(selectorString).addClass("past");
    }
    if(currentTime === selectedHour){
        $(selectorString).removeClass("future")
        $(selectorString).addClass("present");
    }  
    $("button").on("click", function(){
        var task = $(this).siblings(".taskDiv").val()
        var time = $(this).siblings("textarea").attr("id")
        console.log(time, task)

        localStorage.setItem(time, task);  
    });
    $(selectorString).text(localStorage.getItem(i));
}