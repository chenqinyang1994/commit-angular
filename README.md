# commit-angular
the commit specification of angular
```code
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer
### Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）
#### type
用于说明 commit 的类别
* feat：新功能（feature）
* fix：bugfix
* docs：文档变更（README）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* perf：提升性能的更改
* test：增加测试&修改测试用例
* build：构建工具的更改（npm、webpack、gulp等）
* ci：CI的配置文件或脚本的更改
* chore：其他不会修改src或测试文件的更改
* revert：回滚
#### scope
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
#### subject
subject是 commit 目的的简短描述，一般不超过50个字符
### Body
Body 部分是对本次 commit 的详细描述，可以分成多行
### Footer
Footer 部分只用于两种情况
#### 1）不兼容变动
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法
#### 2）关闭 Issue
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 例如：Closes #234
