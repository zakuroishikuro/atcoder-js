// C - Traveling Salesman around Lake
// https://atcoder.jp/contests/abc160/tasks/abc160_c
// 2022-10-10T06:00:55.585Z

export function main(input: string) {
  const [K, N, ...A] = input.split(/\s/).map(Number);

  let max = 0;
  for (let i = 1; i < N; i++) {
    const d = A[i] - A[i - 1];
    max = Math.max(max, d);
  }
  max = Math.max(max, A[0] + K - A[A.length - 1]);

  return K - max;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["20 3\n5 10 15", "10"],
    ["20 3\n0 5 15", "10"],
    ["100 3\n0 1 2", "2"],
    ["100 3\n0 1 99", "2"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
