// D - Christmas
// https://atcoder.jp/contests/abc115/tasks/abc115_d
// 2022-09-25T09:15:05.269Z

/*
const _cook = (level) => {
  if (level == 0) return "P";
  const sub = _cook(level - 1);
  return `_${sub}P${sub}_`;
};

const calc = (level) => {
  if (level == 0) return [1, 1];
  const [subPatty, subBurger] = calc(level - 1);
  return [subPatty * 2 + 3, subBurger * 2 + 1];
};*/

/*
const _eat = (burgers, x) => {
  if (burgers.length == 1) return 1;

  const [len, pat] = burgers.pop();

  if (x == 1) return 0;
  if (x <= len + 1) return _eat(burgers, x - 1);
  if (x == len + 2) return pat + 1;
  if (x <= len * 2 + 2) return _eat(burgers, x - len - 2) + pat + 1;
  return pat * 2 + 1;
};*/

// まじで分からん、nは絶対に必要？
// いつかまた再挑戦する

function eat(n, x, burgers) {
  if (n == 0) return 1;

  const [len, pat] = burgers[n - 1];

  if (x == 1) return 0;
  if (x <= len + 1) return eat(n - 1, x - 1, burgers);
  if (x == len + 2) return pat + 1;
  return eat(n - 1, x - len - 2, burgers) + pat + 1;
}

function main(input = "") {
  const [n, x] = input.split(/\s/).map(Number);

  const burgers = [];
  let len = 1, pat = 1;
  for (let i = 1; i <= n; i++) {
    burgers.push([len, pat]);
    len = len * 2 + 3;
    pat = pat * 2 + 1;
  }

  return eat(n, x, burgers);
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2 7", "4"],
    ["1 1", "0"],
    ["50 4321098765432109", "2160549382716056"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    /*
    test("_cook", () => {
      expect(_cook(0)).toBe("P");
      expect(_cook(1)).toBe("_PPP_");
      expect(_cook(2)).toBe("__PPP_P_PPP__");
      expect(_cook(4)).toBe("____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____");
      expect(_cook(5)).toBe("_____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP____P____PPP_P_PPP__P__PPP_P_PPP___P___PPP_P_PPP__P__PPP_P_PPP_____");
    });

    test("calc", () => {
      expect(calc(0)).toEqual([1, 1]);
      expect(calc(1)).toEqual([5, 3]);
      expect(calc(2)).toEqual([13, 7]);
      expect(calc(4)).toEqual([61, 31]);
      expect(calc(5)).toEqual([125, 63]);
      expect(calc(50)).toEqual([4503599627370493, 2251799813685247]);
    });*/

    /*
    test("_eat", () => {
      expect(_eat([[1, 1], [5, 3]], 1)).toEqual(0);
      expect(_eat([[1, 1], [5, 3]], 2)).toEqual(1);
      expect(_eat([[1, 1], [5, 3]], 3)).toEqual(2);
      expect(_eat([[1, 1], [5, 3]], 4)).toEqual(3);
      expect(_eat([[1, 1], [5, 3]], 5)).toEqual(3);
    });*/

    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });
  }
}
