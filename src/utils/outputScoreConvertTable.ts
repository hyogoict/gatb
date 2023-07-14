import { Arr } from 'types/sensei-web';


const fs = require('fs');

const convertTableHs01: Arr = {};
for (let i = 48; i >= 0; i--) {
  convertTableHs01[i] = Math.floor((i - 48) / 2) + 73;
}
// Not including unexpected blank line, set tab character in the third argument
// let output = JSON.stringify(convertTableHs01, null, '\t');
// TODO: Put conversion tables in descending order
console.log(convertTableHs01)
// console.log(output.sort((x: any, y: any) => y-x));