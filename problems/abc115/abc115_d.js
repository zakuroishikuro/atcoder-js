// D - Christmas
// https://atcoder.jp/contests/abc115/tasks/abc115_d
// 2022-09-25T09:15:05.269Z
const { floor, ceil, abs, sign, sqrt, log, log2, log10 } = Math;
const _vector = (s, fn = (v) => v) => s.split(/\s/).map(fn);
const _matrix = (s, fn) => s.split(/\n/).map((r) => _vector(r, fn));

const _cook = (level) => {
  if (level == 0) return "P";
  const sub = _cook(level - 1);
  return `_${sub}P${sub}_`;
};

const cook = (level, x) => {
  if (x == 1) return 0;

  if (x <= )

  

  const [subPatty, subBurger] = cook(level - 1);
  const patty = 2 * subPatty + 1;
  const burger = 2 * subBurger + 3;
  return [patty, burger];
};

function main(input = "") {
  const [n, x] = _vector(input, Number);

  if (x <= 1) return 0;

  [patty, burger] = cook(n - 2);
  if (x < burger
  

  if (x == 0)

  const 

  return //burger; //(burger.slice(-x).match(/P/g) || []).length;
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
    test("_cook", () => {
      expect(_cook(0)).toBe("P");
      expect(_cook(1)).toBe("_PPP_");
      expect(_cook(2)).toBe("__PPP_P_PPP__");
      expect(_cook(4)).toBe("____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____");
      expect(_cook(5)).toBe("_____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____P____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP_____");
    });

    test("cook", () => {
      expect(cook(0)).toEqual([1, 1]);
      expect(cook(1)).toEqual([3, 5]);
      expect(cook(2)).toEqual([7, 13]);
      expect(cook(4)).toEqual([31, 61]);
      expect(cook(5)).toEqual([63, 125]);
    });

    examples.forEach(([input, output], i) => {
      test.skip(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test.skip("stub", () => {
      expect().toBe();
    });
  }
}
