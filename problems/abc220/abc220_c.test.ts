// C - Long Sequence
// https://atcoder.jp/contests/abc220/tasks/abc220_c
// 2022-10-19T13:24:20.329Z

export function main(input: string) {
  // JavaScriptのNumberは10^15まで。Xの制約が10^18なのでBigIntにしなければならない
  const [N, ...A] = input.split(/\s/).map(BigInt);
  const X = A.pop();

  const sum = A.reduce((a, b) => a + b, 0n);
  const quo = X / sum | 0n; //Math.floorの代替。Numberのビット演算は2^32 - 1に丸められるけどBigIntならたぶん大丈夫

  let x = quo * sum;
  let i = 0;
  while (x <= X) {
    x += A[i++];
  }

  return quo * BigInt(A.length) + BigInt(i);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n3 5 2\n26", "8"],
    //["4\n12 34 56 78\n1000", "23"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
