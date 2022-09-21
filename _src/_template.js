// subject: /*subject*/
// url: /*url*/
// timestamp: /*timestamp*/
function main(input = '') {
  let [a, b, c, d] = input.split(/\s/).map(Number);
  return a;
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    /*examples*/
  ].forEach(([input, output], i) => {
    expect(main(input).toString()).toBe(output);
  });
}
