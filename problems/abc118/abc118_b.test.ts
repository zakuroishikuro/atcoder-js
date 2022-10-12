// B - Foods Loved by Everyone
// https://atcoder.jp/contests/abc118/tasks/abc118_b
// 2022-09-23T12:36:36.447Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  const survey = input.split(/\n/).map((line) => line.split(/\s/).map(Number));
  const [people, foodKinds] = survey.shift();

  const result = new Uint32Array(foodKinds);
  survey.forEach((s) => {
    s.slice(1).forEach((f) => result[f - 1]++);
  });

  return result.reduce((sum, n) => sum + +(people === n), 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4\n2 1 3\n3 1 2 3\n2 3 2", "1"],
    ["5 5\n4 2 3 4 5\n4 1 3 4 5\n4 1 2 4 5\n4 1 2 3 5\n4 1 2 3 4", "0"],
    ["1 30\n3 5 10 30", "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
