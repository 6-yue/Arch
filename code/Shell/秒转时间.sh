#!/bin/bash
seconds=27539
hour=$(( $seconds/3600 ))
min=$(( ($seconds-${hour}*3600)/60 ))
sec=$(( $seconds-${hour}*3600-${min}*60 ))

# 判断是否小于10
if [ "$hour" -lt 10 ];then hour=0$hour;fi
if [ "$min" -lt 10 ];then min=0$min;fi
if [ "$sec" -lt 10 ];then sec=0$sec;fi

# 打印
HMS=${hour}:${min}:${sec}
# HMS=`echo ${hour}:${min}:${sec}`

echo $HMS