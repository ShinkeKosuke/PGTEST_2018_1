document.onkeydown = keydown ; // イベント検出
document.onkeyup   = keyup ; // イベント検出

// 画像の表示座標・移動量
var x  = 400 ; // 表示する座標
var pv =  50 ; // 1回の移動量

// キーボードのフラグ　（1 : 押されている / 0 : 離されている）
var left  = 0 ;
var right = 0 ;
var image = "";

//画像を配列に格納する
var img_left = new Array();
var img_right = new Array();

img_right[0] = new Image();
img_right[0].src = "images/mario_1.png";
img_right[1] = new Image();
img_right[1].src = "images/mario_2.png";
img_right[2] = new Image();
img_right[2].src=  "images/mario_3.png";

img_left[0] = new Image();
img_left[0].src = "images/mario_4.png";
img_left[1] = new Image();
img_left[1].src = "images/mario_5.png";
img_left[2] = new Image();
img_left[2].src=  "images/mario_6.png";

//画像番号用のグローバル変数
var cnt=0;

/********** キーボードのイベント（押された） **********/

function keydown(event) // 押されたキーのフラグを　１　にする
{
  if(event.keyCode == 37) //left key
  {
    left = 1;
    image = "left";
  }
  if(event.keyCode == 39) //right key
  {
    right = 1;
    image = "right";
  }
  changeIMG();
  disp() ;
}

function disp() // キーボード入力を反映して表示座標を更新
{
  if(left==1)   x = x - pv;
  if(right==1)  x = x + pv;

  if(x < 0){
    x = 0;
  }else if(x > 1050){
    x = 1000;
  }else{
    document.getElementById("image").style.left = x;
  }
}

//画像切り替え関数
function changeIMG(){
  //画像番号を進める
  if (cnt == 2)
  { cnt=0; }
  else
  { cnt++; }
  
  //画像を切り替える
  if(image == "left"){
      document.getElementById("image").src=img_left[cnt].src;
  }
  if(image == "right"){
      document.getElementById("image").src=img_right[cnt].src;
  } 
}


/********** キーボードのイベント（離された） **********/

function keyup(event) // 離されたキーのフラグを　０　にする
{
  if(event.keyCode == 37) //left key
  {
    left = 0;
  }
  if(event.keyCode == 39) //right key
  {
    right = 0;
  }
  image = "";
}