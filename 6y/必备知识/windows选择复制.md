## `uncopy.txt`
```bash
# 里面是被排除的文件和文件夹
\node_modules\
.git
```
## `.bat`
```bash
chcp 65001
set uncopy=uncopy.txt
xcopy /e /s /h /y /exclude:%uncopy% 来源文件夹 目标文件夹
# 延迟执行
choice -t 1 -n -d y
pause
```