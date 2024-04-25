## 注意事项

```bash
1. mkv 比 mp4 质量更好，当然，文件也稍大一些
2. 码率控制：
码率控制：码率控制是一种决定为每一个视频帧分配多少比特数的方法，它将决定文件的大小和质量的分配。

普通用户常用CRF、Two-Pass ABR 两种

CRF（Constant Rate Factor - 限制码率因子）

适用范围：1446.251446.25

优点：该方法在输出文件的大小不太重要的时候，可以使整个文件达到特定的视频质量。该编码模式在单遍编码模式下提供了最大的压缩效率，每一帧可以按照要求的视频质量去获取它需要的比特数。

缺点：不好的一面是，你不能获取一个特定大小的视频文件，或者说将输出位率控制在特定的大小上。

参数解析：
1)量化比例的范围为0～51，其中0为无损模式，23为缺省值，51可能是最差的。该数字越小，图像质量越好。从主观上讲，18~28是一个合理的范围。18往往被认为从视觉上看是无损的，它的输出视频质量和输入视频一模一样或者说相差无几。但从技术的角度来讲，它依然是有损压缩。

2)若Crf值加6，输出码率大概减少一半；若Crf值减6，输出码率翻倍。通常是在保证可接受视频质量的前提下选择一个最大的Crf值，如果输出视频质量很好，那就尝试一个更大的值，如果看起来很糟，那就尝试一个小一点值。



使用方法 - 命令行：

ffmpeg -i <input> -c:v libx264 -crf 18 -c:a copy <output>
ffmpeg -i <input> -c:v libvpx-vp9 -crf 18 -b:v 0 <output>
```

## ffplay

```bash
# 不显示播放页面
-nodisp
# 无限循环
-loop 0
# 播放完毕自动退出
-autoexit
# 带字幕播放
ffplay -vf subtitles='字幕.ass' video.mp4
# 设置播放视频长度为5秒
-t 5 或者 -t 00:00:05
# 设置播放视频起始时间
-ss 5 或者 -ss 00:00:05
# 显示时间戳
ffplay -vf "drawtext=text='%{pts\:hms}':fontcolor=white:shadowcolor=#00aeec:shadowx=2:shadowy=2:fontsize=20:x=(w-tw)/2:y=h-(2*lh)" video.mp4

# 配置sh文件，双击执行，并显示ffplay播放时间
#!/bin/bash
loading=$(ls -l . | awk '/^d/ {print $NF}')
ffplay *.mp4 -fs -sync video -ss ${loading} -vf "drawtext=text='%{pts\:hms}':fontcolor=white:shadowcolor=#00aeec:shadowx=2:shadowy=2:fontsize=20:x=(w-tw)/2:y=h-(2*lh)"
```

## 合并音视频

```bash
ffmpeg -i audio.m4s -i video.m4s -c:v copy -c:a aac -strict experimental zone.mp4
```

## 音频封面

```bash
# 添加封面
ffmpeg -i test.mp3 -i test.jpg -map 0 -map 1 -c copy -c:v:1 jpg -disposition:v:1 attached_pic out.mp3
# 音频删除封面
ffmpeg -i test.mp3 -map 0:a -c:a copy -map_metadata -1 output.mp3
```

## 旋转视频

```bash
# 顺时针旋转90度
ffmpeg -i abc.mp4 -vf "transpose=1" out.mp4
# 逆时针旋转90度
ffmpeg -i abc.mp4 -vf "transpose=2" out.mp4
# 水平翻转
ffmpeg -i abc.mp4 -vf hflip out.mp4
# 垂直翻转
ffmpeg -i abc.mp4 -vf vflip out.mp4
# 或需要多种效果，直接叠加 vf里的选项 即可
```

## 合并字幕视频

```bash
# ffmpeg合并视频和字幕文件
1. 软字幕（ 即内挂字幕，字幕还可以分离出来，插入速度快，但是需要播放器支持 ，potplayer支持，VLC不支持）
ffmpeg -i input.mp4 -i sub.srt -c:s mov_text -c:v copy -c:a copy output.mp4
2. 硬字幕（ 将字幕与视频合并，并且不能再分割出来 ）
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -vf subtitles=sub.srt out.mp4
```

## 提取字幕

```bash
ffmpeg -i chase.mkv -map 0:s:0 subs.ass
```

## mp4 -> mkv

```bash
# 当前目录下，批量进行转换 文件名不能太个性了
for i in `find`;do ffmpeg -i ${i%.*}.mp4 ${i%.*}.mkv;done
```

## 裁剪音频

```bash
-i 文件，orgin.mp3 为待处理源文件；
-ss 裁剪时间，后跟裁剪开始时间，以及 -t 裁剪时间；
output.mp3 为处理结果文件；
ffmpeg -i organ.mp3 -ss 00:00:xx -t 120 output.mp3
```

## 取消音频

```bash
ffmpeg -i input.ts -codec copy -q:v 1 -an output.ts
```

## 查看音频视频文件信息并输出为json

```bash
ffprobe -i 输入视频路径 -v quiet -print_format json -show_format -show_streams

# 注意
./ffprobe -select_streams v -show_packets -of json 1.ts

如果是音频，改 -select_streams a

如果要选择音轨，可以这样 -select_streams a:0

./ffprobe -select_streams a:0 -show_packets -of json 1.ts
```
