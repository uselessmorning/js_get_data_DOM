'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const averageField = document.querySelector('.average-population');
const totalField = document.querySelector('.total-population');

let total = 0;
const counts = [];

population.forEach((el) => {
  const number = Number(el.textContent.replaceAll(',', ''));

  total += number;
  counts.push(number);
});

const average = total / counts.length;

totalField.textContent = total.toLocaleString('en-US');
averageField.textContent = average.toLocaleString('en-US');
