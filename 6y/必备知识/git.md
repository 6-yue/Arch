## 拉取远程的指定分支
```bash
git clone -b 分支名 仓库地址
```

## 新建远程分支
```bash
# 新建一个本地分支：
git checkout -b 分支名
# 查看一下现在的分支状态：
git branch
# 把新建的本地分支push到远程服务器，远程分支与本地分支同名(当然可以随意起名)：
git push origin 本地分支名:远程分支名
# 查看所有的远程分支
git branch -a
```

## 删除远程分支

```bash
# 推送一个空分支到远程分支，其实就相当于删除远程分支：
git push origin :要删除的远程分支
# 也可以使用：
git push origin --delete 要删除的远程分支
```

## 覆盖上传
```bash
git push -f origin 本地分支名:远程分支名
```

## 项目上传为空
```bash
# 当子级目录有.git文件，会导致上传时，只上传一个空文件夹，删除即可
```

## 拉取远程所有分支
```bash
git clone 'git地址'
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

## 删除远程指定分支
以 etet 分支为例，执行下述命令，即可删除指定分支
```bash
git push -u origin :etet
```

## 改变git地址
```bash
git remote set-url origin <remote-url>
```


## 清理本地版本库
> 是为了解决 `.git` 文件夹过大的问题
```bash
git gc --prune=now
```