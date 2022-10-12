// B - Algae
// https://atcoder.jp/contests/abc127/tasks/abc127_b
// 2022-10-10T13:34:04.419Z

export function main(input: string) {
  const [r, D, x2000] = input.split(/\s/).map(Number);

  let xi = x2000;
  return [...Array(10)].map((_, i) => (xi = r * xi - D)).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 10 20", "30\n50\n90\n170\n330\n650\n1290\n2570\n5130\n10250"],
    ["4 40 60", "200\n760\n3000\n11960\n47800\n191160\n764600\n3058360\n12233400\n48933560"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
