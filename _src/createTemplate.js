const fs = require("fs");
const path = require("path");

const TEMPLATE_PATH = path.join(__dirname, "/_template.test.ts");
const FILENAME_SUFFIX = ".forked.ts";

const prepareTemplate = (problem) => {
  // サーバー再起動せず変更したいので毎回読み込みなおす
  const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
  return Object.entries(problem).reduce((t, [k, v]) => {
    // JSONにして外側のカッコ・クォートをはずす (テンプレ側に書くため)
    v = JSON.stringify(v).replace(/^["[{]|["\]}]$/g, "");
    return t.replace(`/*${k}*/`, v);
  }, template);
};

const createTemplate = (problem) => {
  // サニタイズ
  let { contestId, problemId, timestamp } = problem;
  contestId = contestId.replace(/[^-\w]/g, "");
  problemId = problemId.replace(/[^-\w]/g, "");
  timestamp = timestamp.replace(/\D+/g, "");

  // フォルダを作成
  const dirPath = path.join(__dirname, `../problems/${contestId}`);
  fs.mkdirSync(dirPath, { recursive: true });

  // ファイルを作成
  const filePath = path.join(dirPath, `${problemId}${FILENAME_SUFFIX}`);
  if (!fs.existsSync(filePath)) {
    const template = prepareTemplate(problem);
    fs.writeFileSync(filePath, template);
  }

  return filePath;
};

module.exports = { createTemplate };
