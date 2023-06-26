const fs = require('fs');

interface arr {
    [key: number]: number
}

const convertTableHs01: arr = {};
for (let i = 36; i >= 0; i--) {
  convertTableHs01[i] = Math.floor((i - 36) / 2) + 117;
}
// Not including unexpected blank line, set tab character in the third argument
// let output = JSON.stringify(convertTableHs01, null, '\t');
// TODO: Put conversion tables in descending order
console.log(convertTableHs01)
// console.log(output.sort((x: any, y: any) => y-x));