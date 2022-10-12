// B - Distance
// https://atcoder.jp/contests/abc174/tasks/abc174_b
// 2022-09-23T03:21:35.604Z

export function main(input: string) {
  const [size, dist, ...vertices] = input.split(/\s/).map(Number);
  let cnt = 0;
  for (let i = 0; i < size; i++) {
    const [x, y] = vertices.slice(i * 2, i * 2 + 2);
    if (x * x + y * y <= dist * dist) cnt++;
  }
  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 5\n0 5\n-2 4\n3 4\n4 -4", "3"],
    ["12 3\n1 1\n1 1\n1 1\n1 1\n1 2\n1 3\n2 1\n2 2\n2 3\n3 1\n3 2\n3 3", "7"],
    [
      "20 100000\n14309 -32939\n-56855 100340\n151364 25430\n103789 -113141\n147404 -136977\n-37006 -30929\n188810 -49557\n13419 70401\n-88280 165170\n-196399 137941\n-176527 -61904\n46659 115261\n-153551 114185\n98784 -6820\n94111 -86268\n-30401 61477\n-55056 7872\n5901 -163796\n138819 -185986\n-69848 -96669",
      "6",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
