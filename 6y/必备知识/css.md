## vue中设置占满屏幕
```vue
<script setup lang="ts">
</script>

<template>
  <div class="h5Html">占满屏幕</div>
</template>

<style scoped>
.h5Html {
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>

```
## vue项目上下左右有一些空白边距，影响效果
```vue
<!-- 
	在index.html中修改
	在style中设置 padding:0 margin:0
 -->

```
## css 动画效果
```scss
// css动画效果
.animationUpDown {
  -webkit-animation: bounce-down 2.6s linear infinite;
  animation: bounce-down 2.6s linear infinite;

  // 鼠标经过动画停止
  &:hover {
    animation-play-state: paused;
  }
}

@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(3px);
  }

  50%,
  100% {
    -webkit-transform: translateY(0);
  }

  75% {
    -webkit-transform: translateY(3px);
  }
}

@keyframes bounce-down {
  25% {
    -webkit-transform: translateY(3px);
  }

  50%,
  100% {
    -webkit-transform: translateY(0);
  }

  75% {
    -webkit-transform: translateY(3px);
  }
}
```
## :hover
### :hover前无空格
.box:hover 给当前元素设置次hover样式，已经设定了相应style样式的子元素不继承此hover效果
给最外层box设置hover样式（背景变为紫色） 
.box:hover{
	background-color: purple;
}
鼠标移入box盒子，box盒子背景色变为紫色，其内部子元素child、inner由于设置了background-color属性，不继承box的hover效果
### :hover前有空格
box :hover（box和:hover之间有空格） 给当前元素全部的直接子元素设置此hover样式，而box自己本身的hover样式不生效
# input的几种禁用方法
1.  disabled 属性规定应该禁用 input 元素，被禁用的 input 元素，不可编辑，不可复制，不可选择，不能接收焦点,后台也不会接收到传值。设置后文字的颜色会变成灰色。disabled 属性无法与 <input type="hidden"> 一起使用。  
2.  readonly 属性规定输入字段为只读可复制，但是，用户可以使用Tab键切换到该字段，可选择,可以接收焦点，还可以选中或拷贝其文本。后台会接收到传值. readonly 属性可以防止用户对值进行修改。
3.  readonly unselectable="on" 该属性跟disable类似，input 元素，不可编辑，不可复制，不可选择，不能接收焦点，设置后文字的颜色也会变成灰色，但是后台可以接收到传值。
# input 和 button 高度不一致
```css
input,button {
	vertical-align: middle;
	height: 25px;
	box-sizing: border-box;
}
```
# 去掉input的边框(包括输入时)
```css
input {
	border: none;
	outline: none;
}
```
# 字体自适应页面
```css
/** 利用css的自动计算方法calc **/
font-size: calc(100vw * 100 / 1920);
/**
calc：是一个css自带的计算方法，可以自动计算后返回px单位的值  
100vw：vw是屏幕的宽度。也就是百分百屏幕宽度。  
*100：这里乘的100代表100px。  
1920：设计稿的宽度
比如：我的需求是屏幕上要一个100px大小的文字，我的设计稿按照是1920*1080大小开发的，但是我需要屏幕大小变化的时候我的100px的字体大小根据窗口变化也放大缩小，因为如果她一直是100px，就会被挤变形到别的位置了。

**/
```

## css中涉及calc
```bash
# calc属性作用不起作用是因为书写格式错误，正确的格式需要在运算符的两边留有空格。 错误例子：div {width:calc (100%-50px)}这样是不生效的 运算符"+ - * /"左右两边均要留空格 正确例子：div {width:calc (100% - 50px)} 2、父元素需要设置高度或者宽度，不能用100%。
```