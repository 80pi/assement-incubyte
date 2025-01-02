"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumberInString = addNumberInString;
function addNumberInString(data) {
  var arr = data.split(",");
  var sum = arr.reduce(function (acc, val) {
    return acc + parseInt(val);
  }, 0);
  if (!sum) return 0;
  //   return arr.reducer((acc,val)=>acc+val)
  else return sum;
}
console.log(addNumberInString("1,2"));
