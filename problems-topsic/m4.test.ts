// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const [[N], ...crabs] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const sum = crabs.reduce((sum,[leg, butter])=>sum + leg * 10 + butter, 0);
  if (sum & 1) return 0; // 奇数なら無理

  // 絶対間に合わないけどあと7分しかない
  let len = 2 ** (N * 11);

  const items: number[] = [];
  for (const [leg, butter] of crabs) {
    items.push(...Array(10).fill(leg), butter);
  }

  const half = sum / 2;
  let cnt = 0;
  for (let i = 0; i < len; i++){
    const bits = [...i.toString(2)].reverse();
    let sum = 0;
    for (let j = 0; j < bits.length; j++) {
      if (bits[j] == "1") sum += items[j];
    }
    if (sum == half) cnt++;
  }

  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1\n1 10", "2"],
    ["1\n10 1", "0"],
    //["8\n0 0\n0 0\n0 0\n0 0\n0 0\n0 0\n0 0\n0 0", "965802399"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
