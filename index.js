// Input
// Dates
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Error Handling
const year_input = document.getElementById("year_input");
const month_input = document.getElementById("month_input");
const day_input = document.getElementById("day_input");

const errormessageYear = document.getElementById("errormessageYear");
const errormessageMonth = document.getElementById("errormessageMonth");
const errormessageDay = document.getElementById("errormessageDay");

// Submit button
const submitBtn = document.getElementById("submitBtn");

// Output
const outputYear = document.getElementById("outputYear");
const outputMonth = document.getElementById("outputMonth");
const outputDay = document.getElementById("outputDay");

// Functions
function main() {
    const userYear = parseInt(year.value);
    const userMonth = parseInt(month.value);
    const userDay = parseInt(day.value);

    const date = new Date(userYear, userMonth - 1, userDay);
    const currentDate = new Date();

    let validYear = false;
    let validMonth = false;
    let validDay = false;

    // Validate Year
    // Error Empty
    if (isNaN(userYear)) {
        errormessageYear.innerText = "This field is required";
        year_input.classList.replace("input-normal", "input-error");
    }
    else if ((date > currentDate) || (userYear > currentDate.getFullYear())) {
        year_input.classList.replace("input-normal", "input-error");
        errormessageYear.innerText = "Must be in the past";
    }
    else {
        year_input.classList.replace("input-error", "input-normal");
        errormessageYear.innerText = "";
        validYear = true;
    }

    // Validate Month
    // Error Empty
    if (isNaN(userMonth)) {
        errormessageMonth.innerText = "This field is required";
        month_input.classList.replace("input-normal", "input-error");
    }
    else if (userMonth > 12 || userMonth < 1) {
        validMonth = false;
        month_input.classList.replace("input-normal", "input-error");
        errormessageMonth.innerText = "Must be a valid month";
    }
    else {
        month_input.classList.replace("input-error", "input-normal");
        errormessageMonth.innerText = "";
        validMonth = true;
    }

    // Validate Date
    const lastDAY = new Date(userYear, userMonth, 0).getDate();
    // Error Empty
    if (isNaN(userDay)) {
        errormessageDay.innerText = "This field is required";
        day_input.classList.replace("input-normal", "input-error");
    }
    else if (userDay > lastDAY || userDay < 1) {
        validDay = false;
        day_input.classList.replace("input-normal", "input-error");
        errormessageDay.innerText = "Must be a valid day";
    }
    else {
        day_input.classList.replace("input-error", "input-normal");
        errormessageDay.innerText = "";
        validDay = true;
    }

    if (validYear && validMonth && validDay) {
        calculateAge(currentDate, date);
    } else {
        outputYear.innerHTML = "--";
        outputMonth.innerHTML = "--";
        outputDay.innerHTML = "--";
    }
}

// Number Counter Animation 
function displayAge(element, age) {
    let counts = setInterval(updateAge, age);
    let counter = 0;
    function updateAge() {
        counter++;
        element.innerHTML = counter;
        if (counter === age || age === 0) {
            clearInterval(counts);
        }
        if (age === 0) {
            element.innerHTML = 0;
        }
    }
}

function calculateAge(currentDate, userDate) {
    const ageinmilisec = currentDate - userDate;
    const ageindate = new Date(ageinmilisec);

    const YEARS = ageindate.getUTCFullYear() - 1970;
    const MONTHS = ageindate.getUTCMonth();
    const DAYS = ageindate.getUTCDate() - 1;

    displayAge(outputYear, YEARS);
    displayAge(outputMonth, MONTHS);
    displayAge(outputDay, DAYS);
}

// Event Handler
submitBtn.addEventListener('click', main);