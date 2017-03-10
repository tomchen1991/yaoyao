function character(name,Hp,Atk,Sht,Spd) {
  this.name=name;
  this.Hp=Hp;
  this.Atk=Atk;
  this.Sht=Sht;
  this.Spd=Spd;
  this.All= Hp+Atk+Sht+Spd;
}
var sou = new character("苍",4,7,8,8);
var nagi = new character("凪",9,6,6,4);
var mao = new character("茉绪",5,5,5,6);
var yuri = new character("ユーリ",7,8,7,10);
var tsukuyomi = new character("月咏",6,10,4,2);
var misaki = new character("みさき",10,9,10,9);
//定义初始表格
function createTd(str) {
  var a=document.createElement("td");
  a.innerHTML=str;
  return a;
}
var table=document.getElementById("charas");
function draw(Obj) {
  var a=document.createElement("tr");
  a.className="characters";
  a.appendChild(createTd(Obj.name));
  a.appendChild(createTd(Obj.Hp));
  a.appendChild(createTd(Obj.Atk));
  a.appendChild(createTd(Obj.Sht));
  a.appendChild(createTd(Obj.Spd));
  a.appendChild(createTd(Obj.All));
  table.appendChild(a);
} //绘制某一行
var charaList=[sou,nagi,mao,yuri,tsukuyomi,misaki] ;//定义初始状态
function setTable(arr) {
  for(var i=0;i<arr.length;i++) draw(arr[i]);
} //表格绘制函数
window.onload=setTable(charaList);
//表格绘制完成
function clearTable(){
  while(table.childNodes.length>2)    table.removeChild(table.lastChild);
}
function sortUp(str,up2down) {
  charaList.sort(function (Obj1,Obj2) {
  return Obj1[str]-Obj2[str];
});
  if(up2down) charaList.reverse();
  clearTable();
  setTable(charaList);
}
var upTri=document.getElementsByClassName("upTri");
var downTri=document.getElementsByClassName("downTri");
upTri[0].onclick= function(){
  sortUp("Hp");
}
upTri[1].onclick=function(){
  sortUp("Atk");
}
upTri[2].onclick=function(){
  sortUp("Sht");
}
upTri[3].onclick=function(){
  sortUp("Spd");
}
upTri[4].onclick=function(){
  sortUp("All");
}
//升序
downTri[0].onclick= function(){
  sortUp("Hp",true);
}
downTri[1].onclick=function(){
  sortUp("Atk",true);
}
downTri[2].onclick=function(){
  sortUp("Sht",true);
}
downTri[3].onclick=function(){
  sortUp("Spd",true);
}
downTri[4].onclick=function(){
  sortUp("All",true);
}
//降序