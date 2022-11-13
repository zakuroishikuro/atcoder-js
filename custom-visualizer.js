/* eslint-disable no-console */
// @ts-check
/**
 * @type {import("@hediet/debug-visualizer-data-extraction").LoadDataExtractorsFn}
 */

module.exports = (register, helpers) => {
  register({
    id: "showGraph",
    getExtractions(data, collector) {
      if (!Array.isArray(data)) return;
      const current = data["current"];
      const next = data["next"];

      collector.addExtraction({
        priority: 1000,
        id: "showGraph",
        name: "グラフ表示",
        extractData() {
          return helpers.asData({
            kind: { graph: true },
            nodes: [...Array(data.length)].map((_, pos) => {
              return { id: `${pos}`, color: current == pos ? "red" : "#D2E5FF" };
            }),
            edges: data.flatMap((adjList, pos) =>
              adjList.map((adj) => {
                const color = current == pos ? (next == adj ? "red" : "orange") : "#2B7CE9";
                return {
                  from: `${pos}`,
                  to: `${adj}`,
                  color,
                };
              }),
            ),
          });
        },
      });
    },
  });

  register({
    id: "showGraphDict",
    getExtractions(data, collector) {
      if (Array.isArray(data)) return;
      if (typeof data !== "object" || data == undefined) return;
      const current = data["current"];
      const next = data["next"];

      collector.addExtraction({
        priority: 1000,
        id: "showGraphDict",
        name: "グラフ表示(object)",
        extractData() {
          return helpers.asData({
            kind: { graph: true },
            nodes: Object.keys(data)
              .filter((k) => !Number.isNaN(+k))
              .map((pos) => {
                return { id: `${pos}`, color: current == pos ? "red" : "#D2E5FF" };
              }),
            edges: Object.entries(data)
              .filter(([k]) => !Number.isNaN(+k))
              .flatMap(([pos, adjList]) =>
                adjList.map((adj) => {
                  const color = current == pos ? (next == adj ? "red" : "orange") : "#2B7CE9";
                  return {
                    from: `${pos}`,
                    to: `${adj}`,
                    color,
                  };
                }),
              ),
          });
        },
      });
    },
  });

  register({
    id: "showGrid",
    getExtractions(data, collector) {
      if (!Array.isArray(data)) return;
      if (!Array.isArray(data[0])) return;

      collector.addExtraction({
        priority: 1000,
        id: "showGrid",
        name: "グリッド表示",
        extractData() {
          return helpers.asData({
            kind: { grid: true },
            rows: data.map((row) => {
              return { columns: row.map((col) => ({ content: `${col}` })) };
            }),
          });
        },
      });
    },
  });
};
