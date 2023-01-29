const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  const newMorse = {
    "**********": " ",
  };

  for (let key in MORSE_TABLE) {
    let newKey = ""; // "1010"

    for (let i = 0; i < key.length; i++) {
      if (key[i] == ".") {
        newKey = newKey + 10;
      }
      if (key[i] == "-") {
        newKey = newKey + 11;
      }
    } //
    // add zero to start
    // newKey

    let newKeyWithZeros = "0".repeat(10 - newKey.length) + newKey;

    newMorse[newKeyWithZeros] = MORSE_TABLE[key];
  }

  let arr = expr.split("");
  // console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length / 10; i++) {
    newArr.push(arr.slice(0 + i * 10, (i + 1) * 10));
  }
  // console.log(newArr);

  let changedArr = newArr.map((item) => {
    return item.join("");
  });

  // console.log(changedArr);

  let res = "";

  changedArr.forEach((item, index) => {
    res = res + newMorse[item];
    // if (item == Object.keys(newMorse)) {
    //   res += newMorse[index];
    // }
  });

  return res;
}

module.exports = {
  decode,
};
