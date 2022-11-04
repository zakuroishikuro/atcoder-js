// A - chukodai
// https://atcoder.jp/contests/abc236/tasks/abc236_a
// 2022-11-04T14:23:59.131Z

const parseVector = (s: string) => s.split(/\s/).map((s) => (isNaN(+s) ? s : Number(s)));
const parseMatrix = (s: string) => s.split(/\n/).map(parseVector);

export function main(input: string) {
  const [[...chars], a, b] = parseVector(input) as [string, ...number[]];
  [chars[+a - 1], chars[+b - 1]] = [chars[+b - 1], chars[+a - 1]];
  return chars.join("");
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()) + "");
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["chokudai\n3 5", "chukodai"],
    ["aa\n1 2", "aa"],
    ["aaaabbbb\n1 8", "baaabbba"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
