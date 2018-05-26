const $ = require ('jquery'),
      moment = require ('moment'),
      _ = require ('lodash'),
      numeral = require ('numeral'),
      ShowData = require ('./moment.js'),
      lastResult = require ('./lodash.js'),
      testNumeral = require ('./numeral.js'),
      func = require ('./jquery.js');
      
ShowData(".data", "moment().format('MMMM Do YYYY, h:mm:ss a')");
ShowData(".data", "moment().format('dddd')");

document.getElementById('lodash-last-list').innerHTML = lastResult;

document.getElementById("numeral-first").innerHTML = testNumeral.format('0,0');
document.getElementById("numeral-second").innerHTML = testNumeral.format('0,0.00');

func('.answer');
