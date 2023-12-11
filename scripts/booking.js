/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value





/********* create variables *********/
let dailyRate = 35; // Initial daily rate
let dayCounter = 0; // Counter for the number of days selected

// Elements on the screen that will be clicked or modified
const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', function () {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            dayCounter++;
        } else {
            this.classList.remove('clicked');
            dayCounter--;
        }

        // Recalculate the total cost
        calculateCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function () {
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });

    dayCounter = 0;

    // Reset the daily rate to full-day
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    dailyRate = 35;

    // Recalculate the total cost
    calculateCost();
});

/********* change rate *********/
halfDayButton.addEventListener('click', function () {
    dailyRate = 20;

    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculateCost();
});

fullDayButton.addEventListener('click', function () {
    dailyRate = 35;

    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculateCost();
});

/********* calculate *********/
function calculateCost() {
    const totalCost = dailyRate * dayCounter;
    calculatedCostElement.textContent = totalCost;
}


