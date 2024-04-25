#!/bin/bash

clear
i=0
while true
do
echo $i
sleep 1
i=$((i+1)) && if [ $i -eq 10 ];then break;fi
done