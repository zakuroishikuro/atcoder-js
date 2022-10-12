// B - Rectangle Detection
// https://atcoder.jp/contests/abc269/tasks/abc269_b
// 2022-09-23T08:08:54.649Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  const s = input.split(/\s/);

  const a = s.findIndex((r) => r.includes("#")) + 1;
  const b = 10 - s.slice().reverse().findIndex((r) => r.includes("#")); // prettier-ignore
  // Node v12だからfindLastIndexない

  const row = s[a - 1];
  const c = row.indexOf("#") + 1;
  const d = row.lastIndexOf("#") + 1;
  return `${a} ${b}\n${c} ${d}`;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["..........\n..........\n..........\n..........\n...######.\n...######.\n...######.\n...######.\n..........\n..........", "5 8\n4 9"],
    ["..........\n..#.......\n..........\n..........\n..........\n..........\n..........\n..........\n..........\n..........", "2 2\n3 3"],
    ["##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########", "1 10\n1 10"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
