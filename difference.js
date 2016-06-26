"use strict";

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});
var livethread = 0;
var list = [];

rl.on('line', (answer) => {
  livethread++;
  fix(answer)
});

rl.on('close', function() {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
})

var fix = function (line) {
  var split = line.split(' ');
  var i1 = parseInt(split[0]);
  var i2 = parseInt(split[1]);
  list.push(abs(i1 - i2));
  livethread--;
}

var abs = function (num) {
  if (num < 0){
    return -num;
  } else {
    return num;
  }
}
