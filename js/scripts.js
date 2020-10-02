function getDate() {
    var date = document.getElementById('myCalendar').Value;

    var gender = document.querySelector('input[name=gender]').Value
    var weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[dt.getDay()];

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
    maleAkan["Tuesday"] = "kwabena";
    maleAkan["Wednesday"] = "Kwaku";
    maleAkan["Thursday"] = "Yaw";
    maleAkan["Friday"] = "Kofi";
    maleAkan["Saturday"] = "Kwame";

    // Return Akan name given day and gender
    if (gender === "male"){
        response(maleAkan);

    }
}elseif (gender === "female"){
    response(femaleAkan);

}
function response(mappedValue){
    innerDay = weekday[day];
    akanName = mappedValue[innerDay]
    document.getElementById("result").innerText = "Hi, your Akan name is"+ akanName+ " and you were born on "+ innerDay + "!"

}