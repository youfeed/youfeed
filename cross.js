/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-base64@3.4.5/base64.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):function(){const r=e.Base64,n=t();n.noConflict=(()=>(e.Base64=r,n)),e.Meteor&&(Base64=n),e.Base64=n}()}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,function(){"use strict";const e="function"==typeof atob,t="function"==typeof btoa,r="function"==typeof Buffer,n=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],o=(e=>{let t={};return n.forEach((e,r)=>t[e]=r),t})(),a=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),i="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),c=e=>e.replace(/[+\/]/g,e=>"+"==e?"-":"_").replace(/=+$/m,""),u=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),s=e=>{let t,r,o,a,f="";const i=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255||(a=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");f+=n[(t=r<<16|o<<8|a)>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}return i?f.slice(0,i-3)+"===".substring(i):f},l=t?e=>btoa(e):r?e=>Buffer.from(e,"binary").toString("base64"):s,d=r?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,n=e.length;r<n;r+=4096)t.push(f.apply(null,e.subarray(r,r+4096)));return l(t.join(""))},p=(e,t=!1)=>t?c(d(e)):d(e),y=e=>unescape(encodeURIComponent(e)),b=r?e=>Buffer.from(e,"utf8").toString("base64"):e=>l(y(e)),h=(e,t=!1)=>t?c(b(e)):b(e),B=e=>h(e,!0),g=e=>decodeURIComponent(escape(e)),m=e=>{if(e=e.replace(/\s+/g,""),!a.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,i="";for(let a=0;a<e.length;)t=o[e.charAt(a++)]<<18|o[e.charAt(a++)]<<12|(r=o[e.charAt(a++)])<<6|(n=o[e.charAt(a++)]),i+=64===r?f(t>>16&255):64===n?f(t>>16&255,t>>8&255):f(t>>16&255,t>>8&255,255&t);return i},A=e?e=>atob(u(e)):r?e=>Buffer.from(e,"base64").toString("binary"):m,U=r?e=>Buffer.from(e,"base64").toString("utf8"):e=>g(A(e)),w=e=>u(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),S=e=>U(w(e)),C=r?e=>i(Buffer.from(w(e),"base64")):e=>i(A(w(e)),e=>e.charCodeAt(0)),R=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),I=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,R(t));e("fromBase64",function(){return S(this)}),e("toBase64",function(e){return h(this,e)}),e("toBase64URI",function(){return h(this,!0)}),e("toBase64URL",function(){return h(this,!0)}),e("toUint8Array",function(){return C(this)})},j=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,R(t));e("toBase64",function(e){return p(this,e)}),e("toBase64URI",function(){return p(this,!0)}),e("toBase64URL",function(){return p(this,!0)})},x={version:"3.4.5",VERSION:"3.4.5",atob:A,atobPolyfill:m,btoa:l,btoaPolyfill:s,fromBase64:S,toBase64:h,encode:h,encodeURI:B,encodeURL:B,utob:y,btou:g,decode:S,fromUint8Array:p,toUint8Array:C,extendString:I,extendUint8Array:j,extendBuiltins:()=>{I(),j()},Base64:{}};return Object.keys(x).forEach(e=>x.Base64[e]=x[e]),x});
//# sourceMappingURL=/sm/4d5caf2d0c894ebb9d2d745d411eeab5ae3bcf2fe43bc7f7b68e46e5d6695f63.map

// 1.提示 当前网站已接入 Cross.Dog 是否体验？ 
var style = `
table{border-spacing: 0;width:100%} 
tr>th, tr>td { text-align: center; padding: 10px; margin: 0; } 
tr>th:first-child, tr>td:first-child {text-align: left;} 
tr>th:last-child, tr>td:last-child {text-align: right;} 
tbody>tr:hover{background-color:#eee}
#header,#main{display: flex;display:-webkit-flex; justify-content: space-between; padding: 0 10px; align-items: center;}
#header{background-color: #8b0000; color: #fff;}
#close{cursor: pointer;}
#mask{background-color:#fff; opacity:0.95; filter: alpha(opacity=95);width:100%;height:100%; position:absolute; left:0; top:0; z-index:99998;display: flex; flex-direction: column; justify-content: space-between;}


#addr{text-align:center;}
#scoll{overflow-y: scroll; height: 100%;}

::-webkit-scrollbar {width: 14px;height: 14px;}
::-webkit-scrollbar-track,::-webkit-scrollbar-thumb {border-radius: 999px;border: 5px solid transparent;}
::-webkit-scrollbar-track {box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;}
::-webkit-scrollbar-thumb {min-height: 20px;background-clip: content-box;box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;}
::-webkit-scrollbar-corner {background: transparent;}
select{border-color: brown; border-radius: 5px;}
@media screen and (max-width: 968px){
#qrcode{width:120px;height:120px;}
}

`
var root = {
  tagName: 'div',
  props: {
    id: 'mask'
  },
  children: [
    {tagName: 'div', props: {class: 'header'}, children: ["Item 1"]},
    {tagName: 'div', props: {class: 'main'}, children: ["Item 2"]},
    {tagName: 'div', props: {class: 'footer'}, children: ["Item 3"]},
  ]
}
var cross = function(){
    this.head = document.getElementsByTagName("head")[0]
    this.script()
    this.style()
    this.socket()
    //绑定事件
    this.closebyid = document.getElementById("close");
	  this.closeBind = this.closeEvent.bind(this);
    this.closebyid.addEventListener("click", this.closeBind, false);
}
cross.prototype.script = function(){
  let x = document.getElementsByTagName("script")
  for(i=0;i<x.length;i++){
    let s = x[i].src
    let y = s.indexOf("cross.js")
    if(y >= 0){
      let kv = {addr:'0xasfsaf1asdgds1g2ds',deley:200}
      window.atob(s.slice(y+9)).split('&').forEach(v=>{
            kv[v.split('=')[0]] = v.split('=')[1]
      })
      if(Object.keys(kv).length == 2){
        for(let [k , v] of Object.entries(kv)){
          this[k] = v
        }
      }
    }
  }
}
cross.prototype.mask = function(){
  let x = document.createElement('div')
      x.id = 'mask'
      
  let o = document.createElement('div')
      o.id = 'header'
      o.innerHTML = '<a href="https://cross.dog"><h1>Cross.Dog·?</h1></a><p id="close"><ruby>2020-08-11 15:25:23<rp>(</rp><rt>Click here to close</rt><rp>)</rp></ruby></p>'
  let p = document.createElement('div')
      p.id='addr'
      p.innerHTML=
      `
      <small class="bet">Only supports 1/10/100/1000/10000 integer single bet</small>
      <h5>Addr:0xb3b7874f13387d44a3398d298b075b7a3505d8d4</h5>
      `
  
  let q = document.createElement('div')
      q.id = 'main'
      q.innerHTML = 
      `
      <div>
        <img src="http://chart.apis.google.com/chart?cht=qr&chs=180x180&chld=L|2&chl=0xb3b7874f13387d44a3398d298b075b7a3505d8d4" id="qrcode">
      </div>
      <div>
        <h5>Only supports Tether(USDT-ERC20)</h5>
        <p class="bet">Issue:
        <select>
          <option value="1">100USDT</option>
          <option value="10">10USDT</option>
          <option value="100">100USDT</option>
          <option value="1000">1000USDT</option>
          <option value="10000">10000USDT</option>
        </select>
        <select>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
          <option value="5">No.100</option>
        </select>
      </div>
      `
  x.appendChild(o)
  x.appendChild(p)
  x.appendChild(q)
  

  
  let m = document.createElement('div')
      m.id='scoll'
      
  let n = document.createElement('table')
      nhead = document.createElement('thead')
      nhead.innerHTML = '<tr><th>Time</th><th>Block</th><th>Address</th><th>Tx Hash</th><th>Quantity</th><th>Status</th></tr>'
      nbody = document.createElement('tbody')
      nbody.innerHTML = 
      `
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
      `
      n.appendChild(nhead)
      n.appendChild(nbody)
      m.appendChild(n)
 x.appendChild(m)
  // document.body.innerHTML = ''
  document.body.appendChild(x)
  
}
cross.prototype.style = function(){
  var x=document.createElement("style");
      x.type = 'text/css'
      x.id = 'crossstyle'
      x.appendChild(document.createTextNode(style))
      this.head.appendChild(x)
      this.mask()
}
cross.prototype.socket = function () {
    var that = this
    var ws = new WebSocket("wss://api.huobiasia.vip/ws");
    ws.onopen = function(){
        that.ws = ws
    　　that.ws.send("hello2");
    　　console.log(that)
    }
    ws.onmessage = function(e){
    　　console.log(e.data);
    }
    ws.onclose = function(e){
    　　console.log("close");
    }
    ws.onerror = function(e){
    　　console.log(error);
    }
}
cross.prototype.show = function () {
    console.log(this)
}

cross.prototype.render = function () {
  var el = document.createElement(this.tagName) // 根据tagName构建
  var props = this.props

  for (var propName in props) { // 设置节点的DOM属性
    var propValue = props[propName]
    el.setAttribute(propName, propValue)
  }

  var children = this.children || []

  children.forEach(function (child) {
    var childEl = (child instanceof cross)
      ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
      : document.createTextNode(child) // 如果字符串，只构建文本节点
    el.appendChild(childEl)
  })
  console.log(el)
  return el
}
cross.prototype.select = function(){
    var select = document.getElementById('select');
    select.onchange = function(){
    alert('1');
    }
}
cross.prototype.closeEvent = function (e){
  console.log(e)
}

new cross()
