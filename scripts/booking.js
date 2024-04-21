/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day = 35;
var day_amount = 0;
const mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click", mondaySelect);
const tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click", tuesdaySelect);
const wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click", wednesdaySelect);
const thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click", thursdaySelect);
const fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click", fridaySelect);
const clear_button = document.getElementById("clear-button");
const halfDay = document.getElementById("half");
const fullDay = document.getElementById("full");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function mondaySelect(){
    if (mondayButton.classList.contains("clicked") == false){
        mondayButton.classList.add("clicked");
        day_amount += 1;
        calculateCost();
    }
}


function tuesdaySelect(){
    if (tuesdayButton.classList.contains("clicked") == false){
        tuesdayButton.classList.add("clicked");
        day_amount += 1;
        calculateCost();
    }
}


function wednesdaySelect(){
    if (wednesdayButton.classList.contains("clicked") == false){
        wednesdayButton.classList.add("clicked");
        day_amount += 1;
        calculateCost();
    }
}


function thursdaySelect(){
    if (thursdayButton.classList.contains("clicked") == false){
        thursdayButton.classList.add("clicked");
        day_amount += 1;
        calculateCost();
    }
}


function fridaySelect(){
    if (fridayButton.classList.contains("clicked") == false){
        fridayButton.classList.add("clicked");
        day_amount += 1;
        calculateCost();
    }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_button.addEventListener("click", clearButton);

function clearButton(){
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    day_amount = 0;
    calculateCost();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click", halfButton);

function halfButton(){
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    cost_per_day = 20;
    calculateCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", fullButton);

function fullButton(){
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    cost_per_day = 35;
    calculateCost();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost(){
    let costLabel = document.getElementById("calculated-cost");
    let total_cost = day_amount * cost_per_day;
    costLabel.innerHTML = total_cost;
}

