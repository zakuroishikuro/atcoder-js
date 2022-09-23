// https://atcoder.jp/contests/abc162/tasks/abc162_b [2022-09-21T15:14:17.634Z]

// 等差数列の和
// https://www.kwansei.ac.jp/hs/z90010/sugakua/suuretu/tousasum/tousasum.htm
const sum = (last, diff = 1, first = diff) => {
	const terms = Math.floor(last / diff);
	return (2 * first + (terms - 1) * diff) * (terms / 2);
};

//const sumOfArithmeticProgressions = (first=1, terms, diff = 1) => (2 * first + (terms - 1) * diff) * (terms / 2);
//const sumOfArithmeticProgressions2 = (first=1, terms, last) => terms * (first + last) / 2;

function main(input = '') {
	const n = +input;
	return sum(n) - sum(n, 3) - sum(n, 5) + sum(n, 15);
}

if (require.main === module) {
	const input = require('fs').readFileSync(0, 'utf8').trim();
	console.log(main(input));
} else {
	test('sum', () => {
		expect(sum(10)).toBe(55);
		expect(sum(10, 3)).toBe(18);
	});

	[
		['15', '60'],
		['1000000', '266666333332'],
	].forEach(([input, output], i) => {
		test(`example ${i}`, () => {
			expect(main(input).toString()).toBe(output);
		});
	});
}

/*
n = +require('fs').readFileSync(0, 'utf8');
s = (l,d,n=l / d | 0)=>(2 * d + (n - 1) * d) * (n / 2);
console.log(s(n, 1) - s(n, 3) - s(n, 5) + s(n, 15));
*/
