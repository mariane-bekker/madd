Madd
===============

Madd is a module that does random things with random numbers

## Basic Usage
```js

var madd = require('madd');
randomObj = madd.addRandom();

//First random number generated
var firstNumber = randomObj.number1;

//Second random number generated
var secondNumber = randomObj.number2;

//Result of the first and second number addition
var result = randomObj.result;
```

## Development

### Grunt

Grunt is a JavaScript task runner to automate common actions. The API Router project
supports the following grunt tasks:

**mochaTest**

Runs all unit tests through mocha.

    $ grunt mochaTest
