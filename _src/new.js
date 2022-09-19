const DELAY_MS = 10_000;

const https = require('https');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const problemsUrl = (arg = '') => {
  const urlMatch = arg.match(/https:\/\/atcoder.jp\/contests\/([^/]+)/);
  const name = urlMatch ? urlMatch[1] : arg;
  return `https://atcoder.jp/contests/${name}/tasks`;
};

const fetch = (url = '') => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      console.log(`  - fetching... ${url}`);
      const code = res.statusCode;
      if (code !== 200) reject(`status code: ${code}, url: ${url}`);

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', chunk => (rawData += chunk));
      res.on('end', () => resolve(rawData));
    });
  });
};

const fetchProblemUrls = async (url = '') => {
  const html = await fetch(url);
  const { document } = new JSDOM(html).window;
  return [...document.querySelectorAll('table tbody td:nth-child(2) a')].map(a => `https://atcoder.jp${a.href}`);
};

const fetchProblem = async (url = '') => {
  const html = await fetch(url);
  const { document } = new JSDOM(html).window;
  const subject = document.title;
  const id = url.match(/[^/]+$/)[0];
  const contest = url.match(/contests\/([^/]+)/)[1];

  const examples = [];
  let i = 0;
  for (const example of document.querySelectorAll('.lang-ja > .part pre')) {
    const text = example.textContent.trim();
    if (i++ % 2 == 0) {
      examples.push([text]);
    } else {
      examples[examples.length - 1].push(text);
    }
  }

  return { url, id, contest, subject, examples };
};

const loadTemplate = problem => {
  const templatePath = path.join(__dirname, '/_template.js');
  let template = fs.readFileSync(templatePath, 'utf8');
  template = template.replace('/*datetime*/', new Date().toISOString());
  for (let [key, value] of Object.entries(problem)) {
    if (key == 'examples') {
      value = JSON.stringify(value || [], null, '  ')
        .slice(1, -2)
        .split(/\n/)
        .map(s => `  ${s}`)
        .join('\n')
        .trim();
    }
    template = template.replace(`/*${key}*/`, value);
  }
  return template;
};

module.exports = { URL, problemsUrl, fetch, fetchProblem, fetchProblemUrls, loadTemplate };

if (require.main == module) {
  (async () => {
    const arg = process.argv[2];
    if (!arg) {
      console.log('  * コンテストのURLを指定してください');
      return;
    }
    const url = problemsUrl(arg);
    const contest = url.match(/contests\/([^/]+)/)[1];
    const dir = path.join(__dirname, `../problems/${contest}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    const problemUrls = await fetchProblemUrls(url);

    for (const problemUrl of problemUrls) {
      const id = problemUrl.match(/[^/]+$/)[0];
      const filePath = path.join(dir, `${id}.js`);
      if (!fs.existsSync(filePath)) {
        const problem = await fetchProblem(problemUrl);
        const template = loadTemplate(problem);
        fs.writeFileSync(filePath, template);
        await new Promise(res => setTimeout(res, Math.random() * DELAY_MS + DELAY_MS));
      } else {
        console.log(`  * skipped: ${problemUrl}`);
      }
    }

    console.log('  * done !');
  })();
}
