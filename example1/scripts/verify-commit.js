const path = require('path');
const fs = require("fs");
const msgPath = process.env.HUSKY_GIT_PARAMS;

const msg = fs.readFileSync(path.join(__dirname, '../../', msgPath), 'utf-8').trim();
const commitRE = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?(:|：)(\s)?.{1,50}/;

if (!commitRE.test(msg)) {
    console.log('\x1B[31m%s\x1B[0m', `
        不合法的commit提交格式
        请查看 git commit 提交规范：https://github.com/chenqinyang1994/commit-angular/blob/main/README.md
    `);
    process.exit(1);
}
