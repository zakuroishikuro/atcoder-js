// C - Manga
// https://atcoder.jp/contests/abc271/tasks/abc271_c
// 2022-10-01T12:08:02.003Z

export function main(input: string) {
  let [_n, ...data] = input.split(/\s/).map(Number);

  // 重複削除 (効率悪いけどとりあえず)
  const uniq = [...new Set(data)];
  uniq.sort((a, b) => a - b);
  data = uniq.concat([...Array(data.length - uniq.length)].fill(Number.MAX_SAFE_INTEGER));

  let i = 0;
  let v = 0;
  let l = data.length;
  while (true) {
    if (i >= l) break;
    v++;
    const cur = data[i];
    if (cur == v) {
      i++;
    } else {
      if (l - i >= 2) {
        l -= 2;
      } else {
        v--;
        break;
      }
    }
  }

  return v;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6\n1 2 4 6 7 271", "4"],
    ["10\n1 1 1 1 1 1 1 1 1 1", "5"],
    ["1\n5", "0"],

    ["5\n1 2 3 4 5", "5"],
    [`50\n${Array(100).fill(1).join(" ")}`, "50"],
    ["5\n1 3 5 7 13", "3"],
    ["5\n1 2 3 5 7 9 13 15", "6"],
    ["5\n1 2 3 5 7 9 13", "5"],

    ["1\n1 2 3 4 5", "5"],
    ["1\n1 2 3 4 5 999", "5"],
    ["1\n1 2 3 4 5 999 999", "6"],
    ["1\n1 2 3 4 5 999 999 999", "6"],
    ["1\n1 2 3 4 5 999 999 999 999", "7"],
    ["1\n1 2 3 4 5 999 999 999 999 999", "7"],
    ["1\n1 2 3 4 5 999 999 999 999 999 999", "8"],
    ["1\n999", "0"],
    ["1\n999 999", "1"],
    ["1\n999 999 999", "1"],
    ["1\n999 999 999 999", "2"],
    ["1\n999 999 999 999 999", "2"],
    ["1\n3 999 999 999 999", "3"],
    ["1\n999 999 999 999 3", "3"],
    ["1\n999 999 999 999 3 4", "4"],
    ["1\n999 999 999 999 3 4 6", "4"],
    ["1\n999 999 999 999 3 4 6 6", "5"],
    ["1\n999 999 999 999 3 4 6 6 10", "6"],
    ["1\n999 999 999 999 3 4 6 10 10", "6"],
    [`1\n${[...Array(10)].map((_, i) => i * 2 + 1).join(" ")}`, "7"],
    [`1\n2 2 3 4`, "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
