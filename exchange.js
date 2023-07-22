// mmk to usd / 1usd = 3100mmk

const rates = {
    usd : 3100,
    sgd : 1500,
    euro : 2500
}

// 500 usd to ? mmk
// 500 * 3100mmk

function usdToMMK(inputUSD){
    return (inputUSD*rates.usd)+ " MMK"

}

function toMMK(inputAmount,fromCurrency){
    return (inputAmount * rates[fromCurrency]) +" MMK"

}



console.log(usdToMMK(1099));
console.log(toMMK(1099,"usd"));
console.log(toMMK(1099,"sgd"));
console.log(toMMK(1099,"euro"));