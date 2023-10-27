// Input
// Dates
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Error Handling
const day_input = document.getElementById("day_input");
const month_input = document.getElementById("month_input");
const year_input = document.getElementById("year_input");

// Calasses
// .day
// .month
// .year

// Submit button
const submitBtn = document.getElementById("submitBtn");

// Output
const outputYear = document.getElementById("outputYear");
const outputMonth = document.getElementById("outputMonth");
const outputDay =document.getElementById("outputDay");

// Functions
function isValidDATE() {

    const userYear = parseInt(year.value);
    const userMonth = parseInt(month.value);
    const userDay = parseInt(day.value);

    const date = new Date(userYear, userMonth -1, userDay);
    const today = new Date();


    if ((date > today) || (userYear > today.getFullYear())) {
        console.log("Year False");
        return false;

    }

    if (userMonth > 12 || userMonth < 1) {
        console.log("Month False");
        return false;
    }

    const lastDAY = new Date(userYear, userMonth, 0).getDate();
    if (userDay > lastDAY || userDay < 1) {
        console.log("Day False");
        return false;
    }

    console.log("True");
    return true;
}



// Event Handler
submitBtn.addEventListener('click', isValidDATE);