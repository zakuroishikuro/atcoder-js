const URL = 'https://atcoder.jp/contests/';
const URL_REX = new RegExp(`${URL}/([^/])`);

const tasksUrl = (arg = '') => {
  const match = arg.match(URL_REX);
  const name = match ? match[1] : arg;
  return `https://atcoder.jp/contests/${name}/tasks`;
};

const fetchContest = (url = '') => {};

const fetchProbrem = url => {};

module.exports = { URL, tasksUrl, fetchContest, fetchProbrem };

/*

function prepareProbrem(subject, url, examples) {

}

const arg = process.argv[2];
*/
