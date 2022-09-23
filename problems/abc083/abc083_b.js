// subject: B - Some Sums
// url: https://atcoder.jp/contests/abc083/tasks/abc083_b
// timestamp: 2022-09-21T14:54:22.892Z

const sumDigits = (n) => ('' + n).split('').reduce((a, b) => +a + +b);

function main(input = '') {
	const [n, a, b] = input.split(/\s/).map(Number);
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		const sum = sumDigits(i);
		if (a <= sum && sum <= b) {
			ans += i;
		}
	}

	return ans;
}

if (require.main === module) {
	const input = require('fs').readFileSync(0, 'utf8').trim();
	console.log(main(input));
} else {
	[
		['20 2 5', '84'],
		['10 1 2', '13'],
		['100 4 16', '4554'],
	].forEach(([input, output], i) => {
		test(`example ${i}`, () => {
			expect(main(input).toString()).toBe(output);
		});
	});
}
