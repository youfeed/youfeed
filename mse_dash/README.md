### 利用 MediaSource API 和 FMP4 制作自定义播放器
先做以下设想
1.资源准备 FMP4切片 init 和segm
设想自己生成 init segm 后端动态根据时间段生成

2.前端js 根据 元信息 初始化


##### 前端实现

定义所需参数

``` js
var video = document.getElementById('video');
var mediaSource = new MediaSource();

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const draw = () => {
  context.drawImage(video, 0, 0);
  requestAnimationFrame(draw);
}

video.onplay = () => {
  requestAnimationFrame(draw);
}
```
