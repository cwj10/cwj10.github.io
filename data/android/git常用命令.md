## git常用命令
- `git help <command>` 显示command的help

-  git config --global user.name "cwj" //设置用户名    
   git config --global user.email "cwj@163.com" //设置邮箱

- 在目录中执行`git init`可以在本地初始化一个git仓库

- 执行`git clone [url]`命令可以复制一个远程仓库

- `git add `添加需要追踪的文件和待提交的更改

- `git status -s`查看你的文件在工作目录与缓存的状态

- `git diff` 显示已写入缓存与已修改但尚未写入缓存的改动的区别,git diff -–cached #查看已缓存的改动,git diff HEAD 查看已缓存的与未缓存的所有改动,git diff –-stat 显示摘要而非整个 diff

- `git commit -m 'xxx'` 记录缓存内容的快照,-m命令提交注释，`git commit -a`  自动将在提交前已记录、修改的文件放入缓存区,新添加的文件还需要git add

- `git reset HEAD -- file`取消缓存已缓存的内容
- `git rm` 将文件从缓存区移除,将文件从缓存区和你的硬盘中（工作目录）删除. 如果要在工作目录中留着该文件，可以使用 `git rm --cached`

- `git branch` 会列出你在本地的分支,`git branch branchname` 创建新分支,用 `git checkout (branch)` 切换到我们要修改的分支,`git checkout -b (branchname) `创建新分支，并立即切换到它 
