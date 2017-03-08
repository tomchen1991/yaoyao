var actButton=document.getElementById("react");
var bG=document.getElementById("hideBack");
var flowUp=document.getElementById("flowUp");
actButton.onclick=function() {
  bG.style.display="block";
  flowUp.style.display="inline";
}
bG.onclick=function() {
  bG.style.display="none";
  flowUp.style.display="none";
  flowUp.style.left="35%";
  flowUp.style.top="35%";
}
//点击按钮弹出，点击遮挡层关闭，悬浮窗回到原位
var cancel=document.getElementById("quxiao");
cancel.onclick=function() {
  bG.style.display="none";
  flowUp.style.display="none";
}
//点击取消按钮，也是关闭
var jumpToBaidu=document.getElementById("queren");
var netAdress=document.getElementById("netAdress");
jumpToBaidu.onclick=function() {
  window.location.href=netAdress.value;
}
//点击确认按钮，跳转网页
netAdress.onkeypress=function(e) {
  e= e ||window.event;
  if (e.keyCode == 13) window.location.href= netAdress.value;
}
//增加回车事件
var forDrag=document.getElementById("title");
forDrag.onmousedown=function(e){
  var deltaX=flowUp.offsetLeft-e.clientX;
  var deltaY=flowUp.offsetTop-e.clientY;
  document.onmousemove=function(ev) {
    ev= ev||window.event;
    flowUp.style.left=deltaX+ev.clientX+"px";
    flowUp.style.top=deltaY+ev.clientY+"px";  
  }
}
document.onmouseup = function () {
  document.onmousemove = function () { }
}
//清空onmousemove