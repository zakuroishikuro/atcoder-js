// D - Yet Another Recursive Function
// https://atcoder.jp/contests/abc275/tasks/abc275_d
// 2022-10-29T12:14:14.647Z

const memo = { 0: 1n };

function f(n: bigint) {
  // ぜったいちがう
  const k = n.toString();
  const v = memo[k];
  if (v) return v;

  const a = n / 2n;
  const ak = a.toString();
  const av = memo[ak] || (memo[ak] = f(a));
  const b = n / 3n;
  const bk = b.toString();
  const bv = memo[bk] || (memo[bk] = f(b));

  return (memo[k] = av + bv);
}

export function main(input: string) {
  const N = BigInt(input);
  return f(BigInt(input));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "3"],
    ["0", "1"],
    ["100", "55"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
