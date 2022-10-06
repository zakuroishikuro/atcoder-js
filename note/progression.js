const term = (index, diff=1, first=1)=>first + (index - 1) * diff;
const termCalc = (diff, first) => (index)=>first + (index - 1) * diff;


// 等差数列の和
// https://www.kwansei.ac.jp/hs/z90010/sugakua/suuretu/tousasum/tousasum.htm

/*
const sum = (index, first, last) = index * (first + last) / 2;
const sumCalc = (diff, first) => (index)=>
*/


const sum = (last, diff = 1, first = diff) => {
  const terms = Math.floor(last / diff);
  return (2 * first + (terms - 1) * diff) * (terms / 2);
};

//const sumOfArithmeticProgressions = (first=1, terms, diff = 1) => (2 * first + (terms - 1) * diff) * (terms / 2);
//const sumOfArithmeticProgressions2 = (first=1, terms, last) => terms * (first + last) / 2;

module.exports = {term, sum};