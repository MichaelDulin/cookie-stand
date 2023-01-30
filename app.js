'use strict';

let seattleArr = [];

let seattleStore = {
  min: 23,
  max: 65,
  avg: 6.3,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let time = 6;
    let cookie = 0;
    let total;
    for (let i = 0; i < 14; i++) {
      cookie = this.getNumberOfRandomCustomers();
      seattleArr[i] = `${time} o'clock: ${cookie} cookies`;
      time += 1;
      total += cookie;
    }
    seattleArr.push(`Total: ${total} cookies`)
    return seattleArr;
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}

seattleStore.consoleLog();

let tokyoStore = {
  min: 3,
  max: 24,
  avg: 1.2,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

let dubaiStore = {
  min: 11,
  max: 38,
  avg: 3.7,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

let parisStore = {
  min: 20,
  max: 38,
  avg: 2.3,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

let seattleObj = {
  min: 2,
  max: 16,
  avg: 4.6,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}
