class Currency {
    constructor(firstCurrency,secondCurrency){
        var date = new Date();
        this.firstCurrency = firstCurrency; //null
        this.secondCurrency = secondCurrency; // null
        this.url = `https://api.ratesapi.io/api/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}?base=`;
        this.amount = null; // It is initially set to null because the Amount information will change every time an event occurs

    }

    exchange(){
        return new Promise((resolve,reject) => { // Returning Promise value should be caught in app.js
            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);
            let total = parity*amount2;
            resolve(total);
        })
        .catch(err => reject(err));
        });
    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

}

