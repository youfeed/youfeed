### 利用 MediaSource API 和 FMP4 制作自定义播放器
1.

```
const video = document.getElementById('video');
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
