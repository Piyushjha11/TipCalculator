"use strict";
let billAmount = document.getElementById('bill');
let noOfPeople = document.getElementById('people');
let CustomTip = document.getElementById('tip-button');
let inputs = document.getElementsByTagName('input');
let tipAmount = document.getElementById('top-amount');
let totalAmount = document.getElementById('bottom-amount');
let bill = 0;
let people = 0;
let tip = 0;
let tipVal = false;
let subTip = document.getElementsByClassName('sub-tip');
for (let j of subTip) {
    j.addEventListener('click', function () {
        tip = parseInt(j.getAttribute('data-value'));
        j.style.backgroundColor = "#8fe0ba";
        j.style.color = "hsl(183, 100%, 15%)";
        tipVal = true;
        let tipPerPerson = ((tip / 100) * bill) / people;
        if (bill != 0 && people != 0 && tip != 0) {
            tipAmount.innerHTML = "$" + tipPerPerson;
            totalAmount.innerHTML = "$" + (tipPerPerson + (bill / people));
        }
    });
}
for (let i of inputs) {
    i.addEventListener('keyup', function (e) {
        bill = billAmount.value;
        people = noOfPeople.value;
        if (tipVal == false) {
            tip = CustomTip.value;
        }
        let tipPerPerson = (tip * bill) / (100 * people);
        if (bill != 0 && people != 0 && tip != 0) {
            tipAmount.innerHTML = "$" + tipPerPerson;
            totalAmount.innerHTML = "$" + (tipPerPerson + (bill / people));
        }
    })
}