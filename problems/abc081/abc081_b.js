// B - Shift only
// https://atcoder.jp/contests/abc081/tasks/abc081_b
// 2022-09-22T15:08:54.949Z

const howManyTimes = (n) => {
	if (n == 0) return 0;

	let i = 0;
	for (; ~n & 1; i++) n >>= 1;
	return i;
};

function main(input = '') {
	const nums = input.split(/\s/).slice(1).map(Number).map(howManyTimes);
	return nums.reduce((min, t) => Math.min(min, t), 2 ** 31);
}

if (process.env.NODE_ENV != 'test') {
	console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
} else {
	test('howManyTimes', () => {
		expect(howManyTimes(0)).toBe(0); // 0
		expect(howManyTimes(1)).toBe(0); // 1
		expect(howManyTimes(2)).toBe(1); // 10
		expect(howManyTimes(16)).toBe(4); // 1_0000
		expect(howManyTimes(256)).toBe(8); // 1_0000_0000
		expect(howManyTimes(255)).toBe(0); // 1_1111_1111
	});

	[
		['3\n8 12 40', '2'],
		['4\n5 6 8 10', '0'],
		['6\n382253568 723152896 37802240 379425024 404894720 471526144', '8'],
	].forEach(([input, output], i) => {
		test(`example #${i + 1}:\n-----\n${input}\n-----`, () => {
			expect(`${main(input)}`).toBe(output);
		});
	});
}
