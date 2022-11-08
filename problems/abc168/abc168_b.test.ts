// B - ... (Triple Dots)
// https://atcoder.jp/contests/abc168/tasks/abc168_b
// 2022-11-08T10:07:17.210Z

export function main(input: string): number | string {
  const [K, S] = input.split(/\s/).map((s) => (isNaN(+s) ? s : Number(s))) as [number, string];
  if (S.length <= K) return S;
  return S.slice(0, K) + "...";
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["7\nnikoandsolstice", "nikoand..."],
    ["40\nferelibenterhominesidquodvoluntcredunt", "ferelibenterhominesidquodvoluntcredunt"],
  ].forEach(([input, expected], i) => {
    const actual = main(input).toString();
    console.log({ i, input, expected, actual });
    console.assert(actual == expected);
  });
}
