window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 1000,
    years: 10,
    rate: 4.5
  }; 
  //create a new loan amount element with Id loan-amount and store it in a variable amountUI
    //  getElementById accepts a string which is the name of an id in the DOM. It finds the first matching id
    // document — Refers to the document object. Any time we want to find an element, we’ll need to access it through the document object. This will allow us to search throughout the entire page.
    //  The dot ties the method on the right-hand side (getElementById) with the object on the left-hand side (document).
  const amountUI = document.getElementById("loan-amount");
  //now update the value of that loan amount with id loan-amout
  amountUI.value = values.amount;
  //create a new number of loan term years and store it in a variable yearsUI
  const yearsUI = document.getElementById("loan-years");
  //update that value of the loan years 
  yearsUI.value = values.years;
  //create new interest rate element with id loan-rate and store in a variable rateUI
  const rateUI = document.getElementById("loan-rate");
  //update that value of the interest rate
  rateUI.value = values.rate;
  //this function is called to get the current monthly payment
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),calculate the monthly payment.The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
