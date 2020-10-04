function checkDayOfWeek() {
    var dateString = document.getElementById('myCalendar').value;
    var dateObject = new Date(dateString)
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = dateObject.getDay();
    console.log(day)