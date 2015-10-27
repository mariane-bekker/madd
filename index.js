module.exports.addRandom = function() {
  var random1 =  Math.random();
  var random2 =  Math.random();
  var add = random1 + random2;

  return {
    number1: random1,
    number2: random2,
    result: add
  }
}
