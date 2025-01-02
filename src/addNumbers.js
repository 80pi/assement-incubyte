"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumberInString = addNumberInString;
function addNumberInString(data) {
    var arr = data.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
    console.log("aaa", arr);
    var sum = 0;
    var negativeMessage = {
        flag: false,
        value: [],
    };
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (parseInt(item) < 0) {
            negativeMessage.flag = true;
            negativeMessage.value.push(item);
        }
        if (parseInt(item) < 1001) {
            sum = sum + parseInt(item);
        }
    }
    if (negativeMessage.flag) {
        return "negatives not allowed ".concat(negativeMessage.value);
    }
    if (!sum)
        return 0;
    else
        return sum;
}
console.log(addNumberInString("1,-3,2,-9,4"));
