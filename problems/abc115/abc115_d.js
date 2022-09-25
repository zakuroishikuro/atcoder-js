// D - Christmas
// https://atcoder.jp/contests/abc115/tasks/abc115_d
// 2022-09-25T09:15:05.269Z
const { floor, ceil, abs, sign, sqrt, log, log2, log10 } = Math;
const _vector = (s, fn = (v) => v) => s.split(/\s/).map(fn);
const _matrix = (s, fn) => s.split(/\n/).map((r) => _vector(r, fn));

const cook = (level) => {
  if (level == 0) return "P";
  const sub = cook(level - 1);
  return `_${sub}P${sub}_`;
};

function main(input = "") {
  const [n, x] = _vector(input, Number);
  const burger = cook(n);
  return (burger.slice(-x).match(/P/g) || []).length;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2 7", "4"],
    ["1 1", "0"],
    //["50 4321098765432109", "2160549382716056"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    test("cook", () => {
      expect(cook(0)).toBe("P");
      expect(cook(1)).toBe("_PPP_");
      expect(cook(2)).toBe("__PPP_P_PPP__");
      expect(cook(4)).toBe("____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____");
      expect(cook(5)).toBe("_____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____P____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP_____");
    });

    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test.skip("stub", () => {
      expect().toBe();
    });
  }
}
