module.exports = function makeExchange(currency) {
  try {
    if (currency > 10000) {
      throw {error: `You are rich, my friend! We don't have so much coins for exchange`};
    }

    const exchangeObject = {};
    const coins = [
      {name: `H`, value: 50},
      {name: `Q`, value: 25},
      {name: `D`, value: 10},
      {name: `N`, value: 5},
      {name: `P`, value: 1}
    ];
    let passingCurrency = currency;

    for (let coin of coins) {
      let coinAmount = Math.floor(passingCurrency / coin.value);
      if (coinAmount > 0) {
        exchangeObject[coin.name] = coinAmount;
        passingCurrency -= coinAmount * coin.value;
      }
    }

    return exchangeObject;
  } catch (error) {
    return error;
  }
};
