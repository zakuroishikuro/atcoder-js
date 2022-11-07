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

      collector.addExtraction({
        priority: 1000,
        id: "showGraph",
        name: "グラフ表示",
        extractData() {
          return helpers.asData({
            kind: { graph: true },
            nodes: [...Array(data.length)].map((_, i) => ({ id: `${i + 1}`, label: `${i + 1}` })),
            edges: data.map(([a, b]) => ({ from: `${a}`, to: `${b}` })),
          });
        },
      });
    },
  });
};
