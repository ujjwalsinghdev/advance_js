/**
 * Character Codes and Code Points
 * str.charCodeAt(index) //good for UTF-8  (0 - 65535 or 0xFFFF)
 * str.codePointAt(index) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 * str.charAt(index)
 *
 * String.fromCharCode(code) //good for UTF-8 (0 - 65535 of 0xFFFF)
 * String.fromCodePoint(code) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 */

let emojis = "😆😀😂🍔🔥❤";
let str = "ab🔥C";

console.log(str.length);
console.log(
  str.charAt(0),
  str.charAt(1),
  str.charAt(2),
  str.charAt(3),
  str.charAt(4)
);

let cs = str.charCodeAt(0);
console.log(cs, cs.toString(16));

let cca = emojis.charCodeAt(0);
let cpa = emojis.codePointAt(0);
console.log(cca, cpa, cca.toString(16), cpa.toString(16));

let char3 = String.fromCharCode(cs);
console.log(char3);
let char1 = String.fromCharCode(cca);
let char2 = String.fromCodePoint(cpa);
console.log(char1, char2);