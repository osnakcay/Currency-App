// Selecting the Elements
const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("EUR","USD");
const ui = new UI(firstSelect,secondSelect);
eventListeners();



function exchangeCurrency(){
    currency.changeAmount(amountElement.value); // updates the amount every time an event occurs
    currency.exchange()  // Captures the value returned from Exchange
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}

function eventListeners() {
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function() {    // The addEventListener method was not used here because some browsers also gave an error.
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent); // Submits new value when there is a change in firstselect
        ui.changeFirst();
        exchangeCurrency();
    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent); // Submits new value when there is a change in secondselect
        ui.changeSecond();
        exchangeCurrency();
    };
}