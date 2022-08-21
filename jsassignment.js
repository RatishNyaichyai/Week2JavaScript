const toCapitalCase = require("to-capital-case");
const toSpaceCase = require("to-space-case");
const isNumber = require("is-number");

function parseElements(elements) {
  return elements.slice(2);
}
arr = parseElements(process.argv);

let array = arr.slice(1);

function validateNumber() {
  array.forEach((element) => {
    if (!isNumber(element)) {
      throw "Please enter numbers only for sorting";
    }
  });
}

function acendingOrder() {
  arrayNumber = array.map((elements) => {
    return Number(elements);
  });
  for (let i = 0; i < arrayNumber.length; i++) {
    for (let j = i + 1; j < arrayNumber.length; j++) {
      if (arrayNumber[i] > arrayNumber[j]) {
        let temp = arrayNumber[i];
        arrayNumber[i] = arrayNumber[j];
        arrayNumber[j] = temp;
      }
    }
  }
  console.log("Acending Order: ", arrayNumber);
}

function decendingOrder() {
  arrayNumber = array.map((elements) => {
    return Number(elements);
  });
  for (let i = 0; i < arrayNumber.length; i++) {
    for (let j = i + 1; j < arrayNumber.length; j++) {
      if (arrayNumber[i] < arrayNumber[j]) {
        let temp = arrayNumber[i];
        arrayNumber[i] = arrayNumber[j];
        arrayNumber[j] = temp;
      }
    }
  }

  console.log("Decending order: ", arrayNumber);
}

function capitalizeWords(word) {
  return word.map((element) => {
    return toCapitalCase(toSpaceCase(element));
  });
}

function dupicates() {
  let count = {};
  array.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });
  console.log(count);
}

switch (arr[0]) {
  case "acending":
    validateNumber();
    acendingOrder();
    break;
  case "decending":
    validateNumber();
    decendingOrder();
    break;
  case "capitalize":
    console.log(capitalizeWords(array));
    break;
  case "duplicates":
    dupicates();
    break;
  default:
    console.log("invalid Option");
    break;
}
