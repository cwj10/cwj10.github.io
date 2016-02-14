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

- `git branch` 会列出你在本地的分支,`git branch branchname` 创建新分支,用 `git checkout (branch)` 切换到我们要修改的分支,`git checkout -b (branchname) `创建新分支，并立即切换到新的分支

- git log，我们可以看到已提交的消息，我们可以用 --oneline 选项来查看历史记录的紧凑简洁的版本，它的十分有帮助的 --graph 选项，查看历史中什么时候出现了分支、合并

- git tag -a v1.0 命令给最新一次提交打上标签

- git fetch 更新你的项目，使用 git push 分享你的改动。 你可以用 git remote 管理你的远程仓库

- git fetch 从远端仓库下载新分支与数据，git pull 从远端仓库提取数据并尝试合并到当前分支

- git push 推送你的新分支与数据到某个远端仓库
