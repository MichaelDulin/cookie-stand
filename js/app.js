'use strict';


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
    for (let i = 0; i < 13; i++) {
      cookie = this.getNumberOfRandomCustomers();
      total = total + cookie;
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
    for (let i = 0; i < 13; i++) {
      cookie = this.getNumberOfRandomCustomers();
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
    for (let i = 0; i < 13; i++) {
      cookie = this.getNumberOfRandomCustomers();
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
    for (let i = 0; i < 13; i++) {
      cookie = this.getNumberOfRandomCustomers();
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
    for (let i = 0; i < 13; i++) {
      cookie = this.getNumberOfRandomCustomers();
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
