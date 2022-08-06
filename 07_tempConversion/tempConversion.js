const ftoc = function(fahr) {
  //round to one decimal
  let celsius = (fahr-32)*5/9;
  let temp = celsius.toFixed(1);
  celsius = Number(temp)
  return celsius
};

const ctof = function(cel) {
  //round to one decimal
  let fahrenheit = (cel*9/5) + 32;
  let temp = fahrenheit.toFixed(1);
  fahrenheit = Number(temp)
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
