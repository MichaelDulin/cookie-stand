'use strict';

// Constructor implementation
// Step 1: setup constructor for dynamic object building
// Step 2: manipulate DOM into a table instead of list

let storeContainer = document.getElementById('salesTable');
let storeTBody = document.querySelector('tbody');
let storeTHead = document.querySelector('thead');

// Constructor
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.id = `${this.name}Profile`;
  this.getNumberOfRandomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  this.parseArr = function() {
    let tempArr = [];
    tempArr[0] = this.name;
    let cookie = 0;
    for (let i = 1; i < 15; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      tempArr[i] = cookie;
    }
    return tempArr;
  }
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
  let tr = document.createElement('td');
  for (let i = 0; i < hArr.length; i++){
    let td = document.createElement('td');
    td.textContent = hArr[i];
    tr.appendChild(td);
  }
  storeTHead.appendChild(tr);
  //storeContainer.appendChild(storeTHead);
 }
}

// Handles footer
function footArr() {
  // Provide a row of hourly totals 
  let fArr = [];
  fArr[0] = 'Totals';
}

Store.prototype.renderTable = function() {
  let tempArr = this.parseArr();
  let tr = document.createElement('tr');
  for (let i = 0; i < tempArr.length; i++) {
    let td = document.createElement('td');
    td.textContent = tempArr[i];
    tr.appendChild(td);
  }
  tempArr.splice(this.name);
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


// Table in HTML 
/*
Top row: HTML-<thead> : JS-amPm / time
Left: 1st column should be store name (seattleArr[0])
*/




/* Lab6
let seattleStore = {
  min: 23,
  max: 65,
  avg: 6.3,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let seattleArr = [];
    let time = 6;
    let cookie = 0;
    let total = cookie;
    let amPm = 'am';
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      total += cookie;
      seattleArr[i] = `${time}${amPm}: ${cookie} cookies`;
      if (i == 6) {
        time -= 12;
        amPm = 'pm';
      }
      time += 1;
    }
    seattleArr.push(`Total: ${total} cookies`);
    return seattleArr;
  },
  renderList: function(){
    // creating container to house all changes made my JS to HTML
    let salesContainer = document.getElementById('salesLocation');
    let salesArt = document.createElement('article');
    salesContainer.appendChild(salesArt);
    // Assign header (h3) value and append it 
    let salesH3 = document.createElement('h3');
    salesH3.textContent = 'Seattle';
    salesArt.appendChild(salesH3);
    let temp = this.parseArr();
    let ul = document.createElement('ul');
    for (let i = 0; i < temp.length; i++) {
      let li = document.createElement('li');
      li.textContent = temp[i];
      ul.appendChild(li);
    }
    salesArt.appendChild(ul);
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}
let tokyoStore = {
  min: 3,
  max: 24,
  avg: 1.2,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let tokyoArr = [];
    let time = 6;
    let cookie = 0;
    let total = cookie;
    let amPm = 'am';
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      total = total + cookie;
      tokyoArr[i] = `${time}${amPm}: ${cookie} cookies`;
      if (i == 6) {
        time -= 12;
        amPm = 'pm';
      }
      time += 1;
    }
    tokyoArr.push(`Total: ${total} cookies`);
    return tokyoArr;
  },
  renderList: function(){
    // creating container to house all changes made my JS to HTML
    let salesContainer = document.getElementById('salesLocation');
    let salesArt = document.createElement('article');
    salesContainer.appendChild(salesArt);
    // Assign header (h3) value and append it 
    let salesH3 = document.createElement('h3');
    salesH3.textContent = 'Tokyo';
    salesArt.appendChild(salesH3);
    let temp = this.parseArr();
    let ul = document.createElement('ul');
    for (let i = 0; i < temp.length; i++) {
      let li = document.createElement('li');
      li.textContent = temp[i];
      ul.appendChild(li);
    }
    salesArt.appendChild(ul);
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}
let dubaiStore = {
  min: 11,
  max: 38,
  avg: 3.7,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let dubaiArr = [];
    let time = 6;
    let cookie = 0;
    let total = cookie;
    let amPm = 'am';
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      total = total + cookie;
      dubaiArr[i] = `${time}${amPm}: ${cookie} cookies`;
      if (i == 6) {
        time -= 12;
        amPm = 'pm';
      }
      time += 1;
    }
    dubaiArr.push(`Total: ${total} cookies`);
    return dubaiArr;
  },
  renderList: function(){
    // creating container to house all changes made my JS to HTML
    let salesContainer = document.getElementById('salesLocation');
    let salesArt = document.createElement('article');
    salesContainer.appendChild(salesArt);
    // Assign header (h3) value and append it 
    let salesH3 = document.createElement('h3');
    salesH3.textContent = 'Dubai';
    salesArt.appendChild(salesH3);
    let temp = this.parseArr();
    let ul = document.createElement('ul');
    for (let i = 0; i < temp.length; i++) {
      let li = document.createElement('li');
      li.textContent = temp[i];
      ul.appendChild(li);
    }
    salesArt.appendChild(ul);
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}
let parisStore = {
  min: 20,
  max: 38,
  avg: 2.3,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let parisArr = [];
    let time = 6;
    let cookie = 0;
    let total = cookie;
    let amPm = 'am';
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      total = total + cookie;
      parisArr[i] = `${time}${amPm}: ${cookie} cookies`;
      if (i == 6) {
        time -= 12;
        amPm = 'pm';
      }
      time += 1;
    }
    parisArr.push(`Total: ${total} cookies`);
    return parisArr;
  },
  renderList: function(){
    // creating container to house all changes made my JS to HTML
    let salesContainer = document.getElementById('salesLocation');
    let salesArt = document.createElement('article');
    salesContainer.appendChild(salesArt);
    // Assign header (h3) value and append it 
    let salesH3 = document.createElement('h3');
    salesH3.textContent = 'Paris';
    salesArt.appendChild(salesH3);
    let temp = this.parseArr();
    let ul = document.createElement('ul');
    for (let i = 0; i < temp.length; i++) {
      let li = document.createElement('li');
      li.textContent = temp[i];
      ul.appendChild(li);
    }
    salesArt.appendChild(ul);
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}
let limaStore = {
  min: 2,
  max: 16,
  avg: 4.6,
  getNumberOfRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  parseArr: function() {
    let limaArr = [];
    let time = 6;
    let cookie = 0;
    let total = cookie;
    let amPm = 'am';
    for (let i = 0; i < 14; i++) {
      cookie = Math.ceil(this.getNumberOfRandomCustomers() * this.avg);
      total = total + cookie;
      limaArr[i] = `${time}${amPm}: ${cookie} cookies`;
      if (i == 6) {
        time -= 12;
        amPm = 'pm';
      }
      time += 1;
    }
    limaArr.push(`Total: ${total} cookies`);
    return limaArr;
  },
  renderList: function(){
    // creating container to house all changes made my JS to HTML
    let salesContainer = document.getElementById('salesLocation');
    let salesArt = document.createElement('article');
    salesContainer.appendChild(salesArt);
    // Assign header (h3) value and append it 
    let salesH3 = document.createElement('h3');
    salesH3.textContent = 'Lima';
    salesArt.appendChild(salesH3);
    let temp = this.parseArr();
    let ul = document.createElement('ul');
    for (let i = 0; i < temp.length; i++) {
      let li = document.createElement('li');
      li.textContent = temp[i];
      ul.appendChild(li);
    }
    salesArt.appendChild(ul);
  },
  consoleLog: function() {
    let tempArr = this.parseArr(); 
    for (let i = 0; i < tempArr.length; i++) {
      console.log(tempArr[i]);
    }
  }
}
seattleStore.renderList();
tokyoStore.renderList();
dubaiStore.renderList();
parisStore.renderList();
limaStore.renderList();
*/
