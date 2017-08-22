## tips
- 开启Terminal快捷键 ctrl+alt+t

## 查看命令帮助
以查看rpm为例：
```
 man rpm

```
```
rpm --help
```
```
info rpm
```

## 开启ssh服务
安装ssh服务    
```
  apt-get install openssh-server
```
检测是否已经启动    
```
  ps -e | grep ssh
```
手动启动
```
  /etc/init.d/ssh start
```
配置端口，配置文件位于 /etc/ssh/sshd_config,默认端口为22
```
  sudo /etc/init.d/ssh restart
```
