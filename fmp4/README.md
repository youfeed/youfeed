### 前端MSE播放 和对 FMP4的理解

测试地址 https://jakebuda.com/video

目前网站有个视频点播服务，采用前端视频上传后端云存储，自动转码成MP4格式(七牛云)


初始化 ： 前端MSE播放 请求视频信息 标题 大小 时长 编码(就是MP4)  可能会有多个分辨率

现在设计想法：想实现实时 FMP4切片 

1. 根据初始化自行组装 FMP4的init 

2.1 根据起始事件 0秒 ~ N秒(间隔 5 - 30 秒不等) 后端实时切片音频 视频流返回

2.2 广告10秒，采用FMP4相同的编码 下次请求时间 变成 0秒 ~ N秒 + skip(10) 后端不是真的跳10秒，而是 帮真是分割片段时间+10秒

3. 前端喂数据给MSE

fmp4 头等于 ftyp + moov 

fmp4 片段 moof + mdat


// 疑问1 我手动切片的 8 个切片 我换了加载顺序，视频依旧按正常顺序播放
说明：视频不是按照加载顺序播放的，而是根据片段内的 时间线加载的

// 疑问2 手动拼接 ftyp + moov 是否可行 在已知 视频信息 分辨率 时长 大小的情况下；


// fmp4
ftyp size=36(8+28) curTotalSize=36
moov size=1227(8+1219) curTotalSize=1263

moof size=1252(8+1244) curTotalSize=2515
mdat size=65895(8+65887) curTotalSize=68410
moof size=612(8+604) curTotalSize=69022
mdat size=100386(8+100378) curTotalSize=169408


#######

fMP4的同步点是通过比特率和媒体类型来匹配的：同一种媒体类型内部的同步点可以相互匹配，但是不同的媒体类型之间的同步点没有必要相互匹配。为了两个数据流之间的音频视频同步，精确的比特流拼接需要完全一致的时间。音频和视频的基本流是独立的，而且是time alignment的，意味着同步点可以和完美的定位到视频的Groups of Pictures(GOPS)或者音频的同步帧。

使用独立的同步点、简单的连接拼接，产生了缩短的segment长度：MPEG2TS的segment尝试是10s，转化频率受限的，而且需要额外的带宽和处理过程。fMP4的segment的长度可以低到1到2s，因为他们不需要额外的带宽和处理过程。较短的segment长度可以做出更快的调整，以避免明显的视频质量改变、重新缓存出现停顿，并且为广告的插入在时间上实现更精确的拼接。

