// C - Belt Conveyor
// https://atcoder.jp/contests/abc265/tasks/abc265_c
// 2022-10-13T15:25:14.441Z

export function main(input: string) {
  const [H, W, ...G] = input.split(/\s/);
  const h = +H;
  const w = +W;
  const f = G.map((r) => [...r]);

  let x = 0;
  let y = 0;
  while (true) {
    const d = f[y][x]; //方向
    f[y][x] = "X"; // 訪問済み

    let dx = x;
    let dy = y;
    // prettier-ignore
    switch (d) { 
      case "U": dy--; break;
      case "D": dy++; break;
      case "L": dx--; break;
      case "R": dx++; break;
      default: return -1;
    }
    if (dx < 0 || w <= dx) break;
    if (dy < 0 || h <= dy) break;

    x = dx;
    y = dy;
  }
  return `${y + 1} ${x + 1}`; // 逆なのと1始まりなの気を付ける
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 3\nRDU\nLRU", "1 3"],
    ["2 3\nRRD\nULL", "-1"],
    [
      "9 44\nRRDDDDRRRDDDRRRRRRDDDRDDDDRDDRDDDDDDRRDRRRRR\nRRRDLRDRDLLLLRDRRLLLDDRDLLLRDDDLLLDRRLLLLLDD\nDRDLRLDRDLRDRLDRLRDDLDDLRDRLDRLDDRLRRLRRRDRR\nDDLRRDLDDLDDRLDDLDRDDRDDDDRLRRLRDDRRRLDRDRDD\nRDLRRDLRDLLLLRRDLRDRRDRRRDLRDDLLLLDDDLLLLRDR\nRDLLLLLRDLRDRLDDLDDRDRRDRLDRRRLDDDLDDDRDDLDR\nRDLRRDLDDLRDRLRDLDDDLDDRLDRDRDLDRDLDDLRRDLRR\nRDLDRRLDRLLLLDRDRLLLRDDLLLLLRDRLLLRRRRLLLDDR\nRRRRDRDDRRRDDRDDDRRRDRDRDRDRRRRRRDDDRDDDDRRR",
      "9 5",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
