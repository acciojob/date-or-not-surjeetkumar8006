var isDate = function (input) {
  // If input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Try parsing other inputs (string, number, etc.)
  var parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
var input = prompt("Enter Date.");
alert(isDate(input));
