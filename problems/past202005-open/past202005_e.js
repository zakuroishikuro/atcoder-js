// E - スプリンクラー
// https://atcoder.jp/contests/past202005-open/tasks/past202005_e
// 2022-09-23T14:29:39.403Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

// かなり時間かかった。
// 入力のパースで添え字が前後してたのと
// 処理後の色の配列を出力してた
// 処理ごとに、処理前にその位置の色を出力しなきゃいけなかった

function parseGraph(edges, vertexCount) {
  const graph = [...Array(vertexCount)].map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function execQueries(colors, graph, queries) {
  const output = [];
  for (const [operation, index, changeColor] of queries) {
    const color = colors[index];
    output.push(color);
    if (operation == 1) {
      graph[index].forEach((otherIndex) => {
        colors[otherIndex] = color;
      });
    } else {
      colors[index] = changeColor;
    }
  }
  return output;
}

function main(input = "") {
  const rows = input.split(/\n/).map((row) => row.split(/\s/).map(Number));
  const [n, m] = rows.shift();

  // 各値を取り出す。頂点の位置はそのまま使えるよう-1しておく。
  const edges = rows.slice(0, m).map((e) => e.map((i) => i - 1));
  const colors = rows[m];
  const queries = rows.slice(m + 1).map((q) => [q[0], q[1] - 1, q[2]]);

  const graph = parseGraph(edges, n);
  const result = execQueries(colors, graph, queries);

  return result.join("\n"); // JSON.stringify(queries); //
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("parseGraph", () => {
    const edges = [[0, 1], [1, 2]];
    const actual = parseGraph(edges, 3);
    expect(actual).toEqual([[1], [0, 2], [1]]);
  });

  /*
  // これらのテスト間違ってる
  // 処理後の配列はあってるけど出力しなきゃいけないのはそれじゃなくて現在のindexの色
  // とりあえず出来たので消しとく
  test("execQueries 1", () => {
    expect(execQueries(
      [10, 20, 30], // 各頂点の値
      [[1], [0, 2], [1]], // 0 <-> 1 <-> 2
      [[1, 0]], // 0番目の値で隣接する頂点を上書き
    )).toEqual(
      [10, 10, 30],
    );

    expect(execQueries(
      [10, 20, 30],
      [[1], [0, 2], [1]],
      [[1, 1]], // 1番目
    )).toEqual(
      [20, 20, 20],
    );

    expect(execQueries(
      [10, 20, 30],
      [[1], [0, 2], [1]],
      [[1, 2]], // 2番目
    )).toEqual(
      [10, 30, 30],
    );
  });

  test("execQueries 2", () => {
    expect(execQueries(
      [10, 20, 30],
      [[1], [0, 2], [1]],
      [[2, 0, 99]], // 0番目を99で上書き
    )).toEqual(
      [99, 20, 30],
    );

    expect(execQueries(
      [10, 20, 30],
      [[1], [0, 2], [1]],
      [[2, 1, 99]], // 0番目を99で上書き
    )).toEqual(
      [10, 99, 30],
    );

    expect(execQueries(
      [10, 20, 30],
      [[1], [0, 2], [1]],
      [[2, 2, 99]], // 0番目を99で上書き
    )).toEqual(
      [10, 20, 99],
    );
  });
  */

  [
    ["3 2 3\n1 2\n2 3\n5 10 15\n1 2\n2 1 20\n1 1", "10\n10\n20"],
    [
      "30 10 20\n11 13\n30 14\n6 4\n7 23\n30 8\n17 4\n6 23\n24 18\n26 25\n9 3\n18 4 36 46 28 16 34 19 37 23 25 7 24 16 17 41 24 38 6 29 10 33 38 25 47 8 13 8 42 40\n2 1 9\n1 8\n1 9\n2 20 24\n2 26 18\n1 20\n1 26\n2 24 31\n1 4\n2 21 27\n1 25\n1 29\n2 10 14\n2 2 19\n2 15 36\n2 28 6\n2 13 5\n1 12\n1 11\n2 14 43",
      "18\n19\n37\n29\n8\n24\n18\n25\n46\n10\n18\n42\n23\n4\n17\n8\n24\n7\n25\n16",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
