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

    var femaleAkan = new Array(7);
    var maleAkan = new Array(7);

    femaleAkan["Sunday"] = "Akosua";
    femaleAkan["Monday"] = "Adwoa";
    femaleAkan["Tuesday"] = "Abenaa";
    femaleAkan["Wednesday"] = "Akua";
    femaleAkan["Thursday"] = "Yaa";
    femaleAkan["Friday"] = "Afua";
    femaleAkan["Saturday"] = "Ama";

    maleAkan["Sunday"] = "Kwasi";
    maleAkan["Monday"] = "Kwadwo";
    maleAkan["Tuesday"] = "Kwabena";
    maleAkan["Wednesday"] = "Kwaku";
    maleAkan["Thursday"] = "Yaw";
    maleAkan["Friday"] = "Kofi";
    maleAkan["Saturday"] = "Kwame";

    var akanName = "";