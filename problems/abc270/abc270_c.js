// C - Simple path
// https://atcoder.jp/contests/abc270/tasks/abc270_c
// 2022-09-24T12:56:19.931Z

// だめだった。あとでまたやる。

const dfs = (tree, targetPos, pos = 1, prevPos = -1, visited = []) => {
  visited.push(pos);

  for (const child of tree[pos]) {
    if (child != prevPos) {
      dfs(tree, targetPos, child, pos, visited);
    }
  }

  if (visited[visited.length - 1] != targetPos) visited.pop();
  return visited;
};

function main(input = "") {
  const data = input.split(/\n/).map((row) => row.split(/\s/).map(Number));
  const [vertices, firstVertex, targetVertex] = data.shift();

  const tree = [...Array(vertices + 1)].map(() => []);
  for (const [u, v] of data) {
    tree[u].push(v);
    tree[v].push(u);
  }

  return dfs(tree, targetVertex, firstVertex).join(" ");
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["5 2 5\n1 2\n1 3\n3 4\n3 5", "2 1 3 5"],
    ["6 1 2\n3 1\n2 5\n1 2\n4 1\n2 6", "1 2"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
