var isDate = function (input) {
  //   write your code here
};

// Do not change the code below.var isDate = function (input) {
  // Check if input is already a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Try to convert input into Date
  const date = new Date(input);
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

const input = prompt("Enter Date.");
alert(isDate(input));
