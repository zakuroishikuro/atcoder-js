// A - AtCoder Quiz 3
// https://atcoder.jp/contests/abc230/tasks/abc230_a
// 2022-11-10T13:23:14.143Z

function main(input: string): number | string {
  let N = +input;
  if (N >= 42) N++;

  return `AGC${N.toString().padStart(3, "0")}`;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

[
  ["42", "AGC043"],
  ["19", "AGC019"],
  ["1", "AGC001"],
  ["50", "AGC051"],
].forEach(([input, e], i) => {
  const a = main(input).toString();
  if (a != e) console.error(`failed !`, { i, input, e, a });
});
