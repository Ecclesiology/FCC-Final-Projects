function checkCashRegister(price, cash, cid) {
  const dollarChart = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  const recordOfChange = {
    hundredArr: ["ONE HUNDRED"],
    twenArr: ["TWENTY"],
    tenArr: ["TEN"],
    fiveArr: ["FIVE"],
    oneArr: ["ONE"],
    quartArr: ["QUARTER"],
    dimeArr: ["DIME"],
    nickArr: ["NICKEL"],
    pennArr: ["PENNY"],
  };

  var change = cash - price;
  var changeArray = [];
  var total = [];
  var registerBalance = [];

  total = total.concat(cid.flat())

  for(let i = 0; i < total.length; i++){
    if(typeof total[i] === "number"){
      registerBalance.push(total[i])
    }
  }
  var roundRegisterBalance = registerBalance.reduce((a,b)=>{return a+b})

  if(change > roundRegisterBalance) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if(change == roundRegisterBalance){
    return { status: "CLOSED", change: cid };
  } else {
  while(change.toFixed(2) > 0) {
    let value = 0;
    if(change.toFixed(2) >= 100) {
      change -= 100;
      value += dollarChart["ONE HUNDRED"];
      cid[8][1] -= 100
      cid[8][1].toFixed(2)
      recordOfChange["hundredArr"].push(value)
    } else if(change.toFixed(2) >= 20 && change.toFixed(2) < 100 && cid[7][1].toFixed(2) > 0) {
      change -= 20;
      value += dollarChart["TWENTY"];
      cid[7][1] -= 20;
      cid[7][1].toFixed(2)
      recordOfChange["twenArr"].push(value)
    } else if(change.toFixed(2) >= 10 && change.toFixed(2) < 20 && cid[6][1].toFixed(2) > 0
    ||
    cid[7][1].toFixed(2) == 0 && change.toFixed(2) >= 10 && change.toFixed(2) < 100 && cid[6][1].toFixed(2) > 0) {
      change -= 10;
      value += dollarChart["TEN"];
      cid[6][1] -= 10;
      cid[6][1].toFixed(2)
      recordOfChange["tenArr"].push(value)
    } else if(change.toFixed(2) >= 5 && change.toFixed(2) < 10
    ||
    cid[6][1].toFixed(2) == 0 && change.toFixed(2) >= 5 && change.toFixed(2) < 20 && cid[5][1].toFixed(2) > 0) {
      change -= 5;
      value += dollarChart["FIVE"];
      cid[5][1] -= 5;
      cid[5][1].toFixed(2)
      recordOfChange["fiveArr"].push(value)
    } else if(change.toFixed(2) >= 1 && change.toFixed(2) < 5 && cid[4][1].toFixed(2) > 0) {
      change -= 1;

      value += dollarChart["ONE"];
      cid[4][1] -= 1;
      cid[4][1].toFixed(2)
      recordOfChange["oneArr"].push(value)
    } else if(change.toFixed(2) >= 0.25 && change.toFixed(2) < 1 && cid[3][1].toFixed(2) > 0) {
      change -= 0.25;

      value += dollarChart["QUARTER"];
      cid[3][1] -= 0.25
      cid[3][1].toFixed(2)
      recordOfChange["quartArr"].push(value)
    } else if(change.toFixed(2) >= 0.1 && change.toFixed(2) < 0.25 && cid[2][1].toFixed(2)> 0) {
      change -= 0.1;

      value += dollarChart["DIME"];
      cid[2][1] -= 0.1;
      cid[2][1].toFixed(2)
      recordOfChange["dimeArr"].push(value)
    } else if(change.toFixed(2) >= 0.05 && change.toFixed(2) < 0.1 && cid[1][1].toFixed(2) > 0){
      change -= 0.05;

      value += dollarChart["NICKEL"];
      cid[1][1] -= 0.05;
      cid[1][1].toFixed(2)
      recordOfChange["nickArr"].push(value)
    } else if(change.toFixed(2) >= 0.01 && change.toFixed(2) < 0.05 && cid[0][1].toFixed(2) > 0) {
      change -= 0.01;

      value += dollarChart["PENNY"];
      cid[0][1] -= 0.01;
      cid[0][1].toFixed(2)
      recordOfChange["pennArr"].push(value)
    }
  }

  // 1. call to for..of initially calls this
recordOfChange[Symbol.iterator] = function() {
  let keys = [];
  let ref = this;

  for (let key in this) {
        //note:  can do hasOwnProperty() here, etc.
        keys.push(key);
    }
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {


    // 3. next() is called on each iteration by the for..of loop
    next: function() {
            if (this._keys && this._obj && this._index < this._keys.length) {
                var key = this._keys[this._index];
                this._index++;
                return { key: key, value: this._obj[key], done: false };
            } else {
                return { done: true };
            }
        },
        _index: 0,
        _keys: keys,
        _obj: ref
  };
}

for (let currency of recordOfChange) {
    currency.reduce((a, b, index, currency) => {
    let changeValue = 0;
    for(index = 1; index < currency.length; index++){
      changeValue += currency[index]
    }
    currency.splice(1)
    currency.push(changeValue)
    })
    if(currency[1] > 0){
      changeArray.push(currency)
    }
}

  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: changeArray};
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
