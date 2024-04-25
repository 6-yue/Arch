## 结束进程
```bash
ps aux | grep vlc # 这里的vlc可以替换为其他的程序名称
# 上面的命令输出结果有一个 pid值
# 然后执行下面的命令结束指定进程
kill "pid" 这是的pid 为进程的pid的值
# 结束指定进程
kill -9 `ps -ef | grep <进程名> | sed -e '$d' | awk '{print $2}'`

# 例如livewallpaper程序
pkill livewallpaper
```

## 查看指定行的数据
### 显示前10行
```bash
# 方法一
head -n 10 /etc/passwd
# 方法二
head -10 /etc/passwd
# 方法三
cat /etc/passwd | head -n 10
# 方法四
cat /etc/passwd | head -10
# 方法五
sed -n '1,10p' /etc/passwd
```
### 查看后N行
```bash
tail -n 10 /etc/passwd
```

### 不要 前60行 后56行
```bash
去掉后num行
head -n -num
去掉前num行
tail -n +num
```

## 查看前/后N行以外的数据
#### 查看除最后10行以外的所有数据
```bash
# 方法一（注意，10前面有个-号）
head -n -10 /etc/passwd
# 解析，head -n 10，默认是查前10行；10前面添加“-”是取反的意思，此时的效果就是不取最后10行（也就是取除最后10行以外的所有数据）
```
#### 查看从第10行到最后一行数据
```bash
tail -n  +10 /etc/passwd  方法一（注意，10前面有个+号）  

解析，tail -n 10，本是查最后10行，前面带个+，就取反了，查的是除了最后10行以外的所有行。 
```
### 查看n,m行区间的数据
```bash
查看第5行到第10行
sed -n '5,10p'  /etc/passwd  方法一（比较简便）
head -n 10 /etc/passwd | tail -5  方法二（前head取前10行，然后再取这10行中的后5行）
```
### 查看指定行，仅此一行的数据
```bash
仅查看第5行

sed -n '5,5p'  /etc/passwd  方法一

head -n 5 num.txt | tail -n 1 方法二（先取前五行，然后再从尾部拿一行出来）
```

## grep

### 统计出现次数

```bash
# 模糊匹配
grep -o '关键字' filename | wc -l
# 精确匹配 (以整个关键字匹配)
grep -wo '关键字' filename | wc -l
```

### grep and(.)

```bash
grep -E '^关键字1.*关键字2' filename
```

### grep or(|)

```bash
grep -E '^关键字1|*关键字2' filename
```

### 匹配仅仅只包含 foo 的行：

```bash
grep '^foo$' 文件名
```

### 在当前文件夹所有文件中查找内容，-n 代表显示行号

```bash
grep -n '被查找的字符串' ./*
find | grep -r -n '被查找的字符串'
```

## sed

> 有多个相同匹配结果时，一定要加`/g`
### 查询指定内容

```bash
打印/etc/passwd中第10行的内容
sed -n '10p' /etc/passwd
　　
打印/etc/passwd中第8行开始，到第15行结束的内容
sed -n '8,15p' /etc/passwd
 
打印/etc/passwd中从第8行开始，然后+5行结束的内容
sed -n '8,+5p' passwd

打印/etc/passwd中开头匹配nginx字符的内容
sed -n '/^nginx/p' /etc/passwd
　　
打印/etc/passwd中开头为root的行开始，到ftp开头的行结束的内容
sed -n '/^root/,/^ftp/p' /etc/passwd
　　
打印/etc/passwd中第8行开始，到包含有/sbin/nologin的内容结束内容
sed -n '8,/\/sbin\/nologin/p' /etc/passwd
　　
打印/etc/passwd中第一个包含/bin/bash内容的行开始，到第5行结束的内容
sed -n '/\/bin\/bash/,5p' /etc/passwd
```
### 替换指定内容

```bash
当我想替换文件中的路径时，使用转义符号`（\）`会比较麻烦且可读性很差。
比如要将abc.sh中的/a/b/c替换成/d/e/f，命令如下：
sed -i 's/\/a\/b\/c/\/d\/e\/f/g'

解决
分隔符由/换成#（其他字符也可以，只要跟在s命令后面即可）
sed -i 's#/a/b/c#/d/e/f#g'
```

### 在指定字符前后添加内容

```bash
test
要求：在1111之前添加AAA,方法如下：
sed -i 's/指定的字符/要插入的字符&/'  文件
sed -i  's/1111/AAA&/' /tmp/input.txt
cat /tmp/input.txt                   
null
0000AAA11112222
 
test
要求：在1111之后添加BBB，方法如下：
sed -i 's/指定的字符/&要插入的字符/'  文件
sed -i  's/1111/&BBB/' /tmp/input.txt    
cat /tmp/input.txt                   
null
0000AAA1111BBB2222
 
test
要求：(1) 删除所有空行；(2) 一行中，如果包含"1111"，则在"1111"前面插入"AAA"，在"11111"后面插入"BBB"
sed '/^$/d;s/1111/AAA&/;s/1111/&BBB/' /tmp/input.txt   
null
0000BBB1111AAA2222

test
要求：在每行的头添加字符，比如"HEAD"，命令如下：
sed -i 's/^/HEAD&/' /tmp/input.txt 
cat /tmp/input.txt
HEADnull
HEAD000011112222
HEAD
HEAD

test
要求：在每行的尾部添加字符，比如"tail"，命令如下：
sed -i 's/$/&tail/' /tmp/input.txt      
cat /tmp/input.txt                
HEADnulltail
HEAD000011112222tail
HEADtail
HEADtesttail
```

### 在指定行前后添加内容

```bash
# 行后
sed -i '/22222/a\3333' test.txt
# 行前
sed -i '/22222/i\3333' test.txt
# 在第2行后插入xxxx
sed '2a xxxx' a.txt
# 在第二行前插入xxxx
sed '2i xxxx' a.txt
# 在第2行到第4行后都插入xxxx
sed '2,4a xxxx' a.txt
# 在第二行和第四行后插入xxxx
sed -e '2a xxxx' -e '4a xxxx' a.txt
# 在行首、行尾添加xxxx
sed '1i xxxx' a.txt # 行首
sed '$a xxxx' a.txt # 行尾
# 在奇数行后添加xxxx
sed '1~2a xxxx' a.txt
# 在偶数行后添加xxxx
sed '2~2a xxxx' a.txt
# 在3倍数行后添加xxxx
sed '3~3a xxxx' a.txt
# 在匹配d的行后添加xxxx
sed '/d/a xxxx' a.txt
# 在以s开头的行后添加xxxx
sed '/^s/a xxxx' a.txt
# 在以d结尾的行后添加xxxx
sed '/d$/a xxxx' a.txt
# 在以s开头同时以w结尾的行后添加xxxx
sed '/^s.*w$/a xxxx' a.txt
# 在同时包含k后者w的行后添加xxxx
sed '/k\|w/a xxxx' a.txt
# 在同时包含4和e的行后添加xxxx
sed '/4.*e\|e.*4/a xxxx' a.txt
```

### sed中使用变量

```bash
# 其中，1为文件名
方法一：单引号
例1：sed -i ''$(sed -n -e '/kms/=' 文件名)'s/#//' 文件名
例2：sed -i ''`sed -n -e '/kms/=' 文件名`'s/#//' 文件名
方法二：双引号
例1：sed -i "$(sed -n -e '/kms/=' 文件名)s/#//" 文件名
例2：sed -i "`sed -n -e '/kms/=' 文件名`s/#//" 文件名
```

### 查询行号

```bash
sed -n -e '/关键字/=' filename
```

### 整行替换

```bash
#代替一行或多行

#第一行代替为Hi
sed '1c Hi' ab
#第一行到第二行代替为Hi
sed '1,2c Hi' ab
```

## 获取当前时间
### 原格式输入
```bash
time1=$(date)
echo $time1
```

###  时间戳转换
```bash
date -d @1234 +"%H:%M:%S"
# 但是因是时间戳默认是从 1970-1-1 08:00:00 开始的，所以有一些问题
```

### 时间串输出
- 20180930155515
```bash
time1=$(date)
echo $time1
```
- 2018-09-30 15:55:15
```bash
time3=$(date "+%Y-%m-%d %H:%M:%S")
echo $time3
```
- 2018.09.30
```bash
time4=$(date "+%Y.%m.%d")
echo $time4
```
### 注意
```bash
# 1、date后面有一个空格，shell对空格要求严格
# 2、变量赋值前后不要有空格
```
### 解释
```bash
1 Y显示4位年份，如：2018；y显示2位年份，如：18。
2 m表示月份；M表示分钟。
3 d表示天；D则表示当前日期，如：1/18/18(也就是2018.1.18)。
4 H表示小时，而h显示月份。
5 s显示当前秒钟，单位为毫秒；S显示当前秒钟，单位为秒。
```
## 延时函数
```bash
在 linux shell 脚本中经常需要做一些延时处理。
所以经常要用到 sleep 或 usleep 函数。
下面来说一下  sleep 和 usleep 的区别：
 
sleep : 默认以秒为单位。
 
usleep : 默认以微秒为单位。
 
1s = 1000ms = 1000000us
 
sleep 不但可以用秒为单位，还可以指定延迟的单位，例如：
 
sleep 1s 表示延迟一秒
 
sleep 1m 表示延迟一分钟
 
sleep 1h 表示延迟一小时
 
sleep 1d 表示延迟一天
```
## for循环
```bash
for i in {1..100}; do sleep 1s && echo 我被打击了; done
```
- 死循环-延迟5s-发送邮箱
```bash
while true; do free | mail -s "$(date "+%Y-%m-%d %H:%M:%S")" jm && sleep 5s; done
```
## if
```bash
if((10%2 == 0)); then echo true; fi
if((10%2 == 1)); then echo true;else echo false; fi
if [ $? -ne 0 ];then echo "命令未成功执行";fi
```
## do while
```bash
while ([ $? -ne 0 ])  
do  
   clear  
   重复执行未成功执行的命令  
   passwd  
done
```
## 管道符 |
```bash
tail -n 1 README.md | sh
```
## 字符串截取
cut 命令
cut [选项] 文件名
```bash
-f  列号　　#提取第几列（分隔符默认为\t）
-d  分隔符　　#指定分隔符
例如：cut -f 2 a.txt　　#截取文件a.txt内容的第二列（列号从1开始）
　　　cut -f 2,4 a.txt　　#截取文件a.txt内容的第二列和第四列
　　　cut -d “:” -f 1,3 /etc/passwd　　#截取文件passwd文件的第1列和第三列，以:分割取其中的第一列和第三列
```
## vim
```bash
# 基础命令
1. yy 是复制
2. p 是粘贴 dd 也可当作为剪贴
3. v 是选择 再次按v是退出选择
4. k是上
5. j是下
6. h是左
7. l是右
8. shift + i 行首输入
9. shift + a 行尾输入
10. u 撤销上一次操作 U 撤销本行的操作
11. ctrl+r 反撤销
12. gg 开始处
13. shift + g 结尾处
14. x 相当于delete
15. shift + x 相当于backspace
16. shift + 6 定位到行首
17. shift + 4 定位到行尾
18. shift + j 合并多行
19. b 前一单词
20. w 后一单词
21. . 重复命令
22. < 反缩进 > 缩进
23. - 前一行行首 + 后一行行首
24. { 段首 } 段尾
25. 替换 `:%s/./,/g`
    1. 这里是将句号换算成逗号
    2. 区别大小写(不区别的话 g 换成 i)
    3. %s 为首行到尾行
        1. 1,3表示替换第一行至第三行，1,$表示替换第一行到最后一行
26. 在vim中有3中方法可以跳转到指定行（首先按esc进入命令行模式）： 1、ngg/nG （跳转到文件第n行，无需回车） 2、:n （跳转到文件第n行，需要回车） 3、vim +n filename （在打开文件后，跳转到文件的第n行）
27. 按住 `v` 通过视图模式选择内容 在命令行模式下输入 `w 新文件名` 用于选中一些内容，并生成新文件
28. 命令行模式 -> :起始行号,结束行号s/^/注释符/g 添加多行注释
29. 命令行模式 -> :起始行号,结束行号s/^注释符//g 取消多行注释

# 浏览文件
1. vim命令模式下
2. :e  #打开当前目录下其他文件
3. :Ex #当前窗口下打开
4. :Ve #竖直分割窗口打开
5. :Se #水平分割窗口打开

# 删除空行
1. :g/^$/d # 删除不包含任何空格的空行
2. :g/^\s*$/d # 删除包含空格的空行
```

## Bash echo输出空格不换行
```bash
IFS=$'\n'
可以注意到，本质上循环打印没有改变，只是在执行前后对常量 IFS 进行了人为指定。
原来，bash循环默认使用空格作为分隔的依据。
我们只用手动指定 “\n”换行符为分隔的依据，就顺利地原样输出了。
```

## 文件/文件夹是否存在，执行命令
```bash
# 如果 test.sh 存在，执行 test.sh
while [ -f test.sh ];do bash test.sh && sleep 3; done
# 如果文件夹不存在，创建文件夹
if [ ! -d "/myfolder" ]; then mkdir /myfolder; fi
```

## 显示所有 mp3 文件
```bash
IFS=$'\n' && realpath `find ~/ | grep 'mp3$'`
```

## 配置sh文件，双击执行，并打开konsole
````bash
#!/bin/bash
konsole -e /bin/bash -c "命令"
```