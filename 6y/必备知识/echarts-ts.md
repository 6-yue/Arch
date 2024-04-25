## 类型“HTMLElement | null”的参数不能赋给类型“HTMLElement”的参数。 不能将类型“null”分配给类型“HTMLElement”
```vue
<template>
  <div id="main"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';
// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  // const myChart = echarts.init(document.getElementById('main') as HTMLElement);
  // 绘制图表
  // myChart.setOption({
  echarts.init(document.getElementById('barChart') as HTMLElement).setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
})
</script>

<style scoped>
#main {
  height: 100%;
  width: 100%;
}
</style>
```
## 实例
```vue
<template>
  <!-- 收费月报和月抄送总量的区域 -->
  <div class="boxborder">
    <div class="leftTopIcon" style="top: 20px">
      <div class="IconTitle">收费月报</div>
      <img src="../Icon/tabletitle-bg.png">
    </div>
    <div class="leftTopIcon" style="bottom: 220px">
      <div class="IconTitle">月抄收总量</div>
      <img src="../Icon/tabletitle-bg.png">
    </div>
    <div>
      <div ref="barChart" class="barChart" :style="{ width: '460px',height: '200px' }"></div>
      <div ref="lineChart" class="lineChart" :style="{ width: '460px',height: '200px' }"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
  feeStatistics: [];
  statisticsMonthBookletRecord: [];
}>();

// 绘制柱形图
const barChart = ref<HTMLElement>();
const myChartBar = ref<any>();
function initBarEcharts() {
  myChartBar.value = echarts.init((barChart.value) as HTMLElement);
  myChartBar.value.setOption({
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        // data: props.feeStatistics,
        data: [100000, 90000, 140000, 130000, 100000, 100000, 130000 ,100000, 160000, 80000, 80000, 80000],
        type: 'bar'
      }
    ]
  })
}

// 绘制折线图
const lineChart = ref<HTMLElement>();
const myChartLine = ref<any>();
function initLineEcharts() {
  myChartLine.value = echarts.init((lineChart.value) as HTMLElement);
  myChartLine.value.setOption({
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        // data: props.statisticsMonthBookletRecord,
        data: [150, 230, 224, 218, 135, 147, 260, 135, 147, 260, 135, 147],
        type: 'line'
      }
    ]
  })
}

watch(
  () => [props.statisticsMonthBookletRecord, props.feeStatistics],
  () => {
    initBarEcharts();
    initLineEcharts();
  }
);

onMounted(() => {
  initBarEcharts();
  initLineEcharts();
})

</script>

<style lang="scss" scoped>
.boxborder {
  widows: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("../Icon/yuebaochaoshou.png");
  background-size: 100% 100%;
  position: relative;
  padding-top: 40px;

  .leftTopIcon {
    position: absolute;
    left: 20px;
    // top: 20px;
    font-style: oblique;

    .IconTitle {
      position: absolute;
      left: 20px;
      top: -6px;
      font-size: 14px;
      font-family: 'SourceHanSansCN';
      font-weight: bold;
      color: #fff;
    }
  }
  // echarts的样式配置
  .barChart {
    // background-color: rgb(214, 234, 246);
    padding-left: 15px;
  }
  .lineChart {
    // background-color: green;
    padding-left: 15px;
  }
}
</style>
```
## 柱状图样式
### x,y轴样式
```js
xAxis: {
  type: 'category',
  data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  // x轴显示不全解决方案
  axisLabel: {
	interval: 0,
  },
  // x轴刻度线
  axisTick: {
	show: false
  }
  axisLine: {
	// x轴颜色
	lineStyle: {
		color: 'red'
	}
  }
},
yAxis: {
	// y轴单位
	name: '元',
	// 位置
  nameTextStyle: {
	padding: [0, 0, 0, 10] // 上右下左
  },
  type: 'value',
  axisLine: {
	// y轴颜色
	lineStyle: {
	  color: '#345523'
	}
  },
  // 网格线样式
  splitLine: {
	show: false // 显示与隐藏
	lineStyle: {
	  color: '#192c41', // 网格线颜色
	  width: 1,
	  type: 'solid' // 网格线样式虚线
	}
  }
},
// area区域颜色
areaStyle: {
  normal: {
	color: new echarts.graphic.LinearGradient(
	  0, 0, 0, 1,
	  [
		{ offset: 0, color: 'rgba(0, 10, 128, 0.7)' },
		{ offset: 0.5, color: 'rgba(100, 0, 128, 0.4)' },
		{ offset: 1, color: 'rgba(0, 200, 128, 0.1)' },
	  ]
	)
  }
}
```
### 柱子的样式
```js
series: [
  {
	// data: props.feeStatistics,
	data: [100000, 90000, 140000, 130000, 100000, 100000, 130000 ,100000, 160000, 80000, 80000, 80000],
	type: 'bar',
	name: '销量',
	barWidth: 15, // 柱状宽度
	itemStyle: {
		// 柱子添加圆角
		borderRadius: [2, 2, 0, 0],
		// 柱子设置渐变色
		color: new echarts.graphic.LinearGradient(
		  0, 0, 0, 1,
		  [
			{offset: 0, color: '#3FB1E3'},
			{offset: 1, color: '#6BE6C1'}
		  ]
		)
	}
  }
]
```
## 图例每一块区域显示提示信息
```js
tooltip: {
  trigger: 'item',
  formatter: '{b} <br/> {c}',
  backgroundColor: 'rgba(67,100,247,0.8)',
  textStyle: {
	color: '#fff',
  },
  padding: [10, 10],
  axisPointer: {
	type: 'shadow',
	shadowStyle: {
	  color: '#fff',
	},
  },
},
```