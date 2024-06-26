function formateSeconds(endTime) {
    let secondTime = parseInt(endTime),//将传入的秒的值转化为Number
        min = 0,// 初始化分
        h = 0,// 初始化小时
        result = ''
    if (secondTime >= 60) {//如果秒数大于等于60，将秒数转换成整数
        min = parseInt(secondTime / 60)//获取分钟，除以60取整数，得到整数分钟
        secondTime = parseInt(secondTime % 60)//获取秒数，秒数取佘，得到整数秒数
        if (min >= 60) {//如果分钟大于等于60，将分钟转换成小时
            h = parseInt(min / 60)//获取小时，获取分钟除以60，得到整数小时
            min = parseInt(min % 60) //获取小时后取佘的分，获取分钟除以60取佘的分
        }
    }
    return `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`
    // return result
}

console.log(formateSeconds(123456))
