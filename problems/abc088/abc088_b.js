// B - Card Game for Two
// https://atcoder.jp/contests/abc088/tasks/abc088_b
// 2022-09-23T01:14:21.265Z
function main(input = '') {
	const nums = input.split(/\s/).map(Number).slice(1).sort((a, b) => b - a);

	return nums.reduce((sum, n, i) => sum + (i & 1 ? -n : n), 0);
}

if (process.env.NODE_ENV != 'test') {
	console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
} else {
	[
		['2\n3 1', '2'],
		['3\n2 7 4', '5'],
		['4\n20 18 2 18', '18'],
	].forEach(([input, output], i) => {
		test(`example #${i + 1}`, () => {
			expect(`${main(input)}`).toBe(output);
		});
	});
}
