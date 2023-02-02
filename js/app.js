'use strict';

let storeContainer = document.getElementById('salesTable');
let storeTBody = document.querySelector('tbody');
let storeTHead = document.querySelector('thead');
let storeTFoot = document.querySelector('tfoot');
let totalArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Constructor
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.getNumberOfRandomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  this.parseArr = function() {
    let tempArr = [];
    let cookie = 0;
    let dailyTotal = 0;
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      tempArr[i] = cookie;
      dailyTotal += cookie;
      totalArr[i] += cookie;
    }
    totalArr[14] += dailyTotal;
    tempArr.push(dailyTotal);
    return tempArr;
  }
} 

function total() {
  totalArr.unshift('Totals');
  let tr = document.createElement('tr');
  for (let i = 0; i < totalArr.length; i++) {
    let td = document.createElement('td');
    td.textContent = totalArr[i];
    storeTBody.appendChild(tr);
    tr.appendChild(td);
  }
  storeContainer.appendChild(storeTFoot);
}


// Handles header
function headArr() {
  let hArr = [];
  let amPm = ':00am';
  let time = 6;
  hArr[0] = '';
  for (let i = 1; i < 15; i++) {
    if (i == 8) {
      amPm = ':00pm';
      time -= 12;
    }
    hArr[i] = time + amPm;
    time += 1;
  }
 hArr.push(`Daily Location Total`);
 renderTHead();



 function renderTHead() {
  let tr = document.createElement('tr');
  for (let i = 0; i < hArr.length; i++){
    let th = document.createElement('th');
    th.textContent = hArr[i];
    storeTHead.appendChild(tr);
    tr.appendChild(th);
  }
  storeContainer.appendChild(storeTHead);
 }


 
}

Store.prototype.renderTable = function() {
  let tempArr = this.parseArr();
  tempArr.unshift(this.name);
  let tr = document.createElement('tr');
  for (let i = 0; i < tempArr.length; i++) {
    let td = document.createElement('td');
    td.textContent = tempArr[i];
    tr.appendChild(td);
  }
  storeTBody.appendChild(tr);
  storeContainer.appendChild(storeTBody);
}

let seattle = new Store(
  'Seattle',
  23,
  65,
  6.3
);
let tokyo = new Store(
  'Tokyo',
  3,
  24,
  1.2
);
let dubai = new Store(
  'Dubai',
  11,
  38,
  3.7
);
let paris = new Store(
  'Paris',
  20,
  38,
  2.3
);
let lima = new Store(
  'Lima',
  2,
  16,
  4.6
);

headArr();
seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
total();
