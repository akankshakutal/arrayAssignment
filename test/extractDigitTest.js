const assert  = require('assert');
const lib = require('../lib/extractDigits.js');
const reverse = require('../lib/reverseArray.js');
const { testLib } = require('../testLib.js');

console.log("---------- Test report ----------");

testLib(lib.giveDigits,123456,['1','2','3','4','5','6']);

testLib(lib.giveDigits,1,['1']);

testLib(lib.giveDigits,0,['0']);

testLib(lib.giveDigits,-12345,['-','1','2','3','4','5']);


