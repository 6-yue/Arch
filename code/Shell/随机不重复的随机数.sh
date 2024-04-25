#!/bin/bash

echo "产生不重复的随机正整数"
# read -p "输入随机数的起始值" Start_Num
# read -p "输入随机数的终止值" End_Num
Start_Num=1
End_Num=10

Array_Length=$[End_Num-Start_Num+1]

typeset rand

for ((i=0;i<$Array_Length;i++))
  do
    Rnum=$[RANDOM%$Array_Length+Start_Num]
    Length=${#RAND[@]}
    if [ $Length -eq 0 ]; then
    RAND[$i]=$Rnum
    else
    for ((j=0;j<$Length;j++))
      do
        if [ $Rnum != ${RAND[$j]} ]; then
          continue
        else
          Rnum=$[RANDOM%$Array_Length+Start_Num]
          j=-1
        fi
      done
      RAND[$i]=$Rnum
      fi
    done

    for ((x=0;x<$Array_Length;x++))
      do 
      echo ${RAND[$x]}
  done
