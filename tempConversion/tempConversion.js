const ftoc = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5/9);
  return Number(tempInCelsius.toFixed(1));
};

const ctof = function(tempInCelsius) {
  let tempInFahrenheit = tempInCelsius * (9/5) + 32;
  return Number(tempInFahrenheit.toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
