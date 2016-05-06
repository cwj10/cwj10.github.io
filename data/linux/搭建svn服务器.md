ubuntu环境下搭建svn服务器
## 安装与部署
- 直接安装
```
  sudo apt-get install subversion
```
- 创建版本库
```
  sudo mkdir /home/svn
  sudo svnadmin create /home/svn/repos
```

## 进入版本库查看生成的文件
```
  cd /home/svn/repos/
  ls
  conf  db  format  hooks  locks  README.txt
```
这里主要关心conf下的文件
```
  ls conf
  authz  hooks-env.tmpl  passwd  svnserve.conf
```
authz文件是设置用户权限，passwd文件是存储用户及密码，svnserve.conf是主配置文件

## 配置版本库
- 修改主配置文件
```
  sudo vi svnserve.conf
```
将一下参数去掉注释    
[general]     
anon-access = none #匿名访问权限    
auth-access = write #认证用户权限   
- 添加用户    
```
  sudo vi passwd #格式是用户名 = 密码，采用明文密码
```
[users]    
cwj = 123    
ccc = 123    
aaa = 123    
- 定义用户的组
```
  sudo vi authz
```
[groups]    
manager = cwj
dev = aaa,ccc
[/] #以根目录起始的版本库manager组为读写权限
@manager = rw
[/media]
@dev = r

## 启动服务
```
  sudo svnserve -d -r /home/svn
```
-d 表示在后台运行    
-r 指定文件系统的根位置（版本库的根目录），这样客户端不用输入全路径，就可以访问版本库    
查看是否成功，可以看3690端口
```
  sudo netstat -antp | grep svnserve
  tcp        0      0 0.0.0.0:3690            0.0.0.0:*               LISTEN      3764/svnserve  
```
如果想要关闭服务，可以使用pkill svnserve    
访问svn版本库可以使用
svn://192.168.1.102

## 开机启动svn服务
- 创建svnd.sh    
#!/bin/bash
svnserve -d -r /data/svn    
放在/etc/init.d/svnd.sh    
- 添加可执行命令
```
  chmod ug+x /etc/init.d/svnd.sh
```
- 修改rc.local
vim /etc/rc.local    
在最下面一行加上  /etc/init.d/svnd.sh    
或者执行    
```
  update-rc.d svnd.sh defaults   
```
重启服务器  ps -e  |  grep  svnserve

## 提交强制添加注释
修改/home/svn/repos/pre-commit文件，去掉.tmpl后缀。
