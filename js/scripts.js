function checkDayOfWeek() {
    var dateString = document.getElementById('myCalendar').value;
    var dateObject = new Date(dateString)
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var weekday = new Array(7);