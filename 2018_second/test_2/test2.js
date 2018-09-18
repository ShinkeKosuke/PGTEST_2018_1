document.onkeydown = keydown ; // �C�x���g���o
document.onkeyup   = keyup ; // �C�x���g���o

// �摜�̕\�����W�E�ړ���
var x  = 400 ; // �\��������W
var pv =  50 ; // 1��̈ړ���

// �L�[�{�[�h�̃t���O�@�i1 : ������Ă��� / 0 : ������Ă���j
var left  = 0 ;
var right = 0 ;
var image = "";

//�摜��z��Ɋi�[����
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

//�摜�ԍ��p�̃O���[�o���ϐ�
var cnt=0;

/********** �L�[�{�[�h�̃C�x���g�i�����ꂽ�j **********/

function keydown(event) // �����ꂽ�L�[�̃t���O���@�P�@�ɂ���
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

function disp() // �L�[�{�[�h���͂𔽉f���ĕ\�����W���X�V
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

//�摜�؂�ւ��֐�
function changeIMG(){
  //�摜�ԍ���i�߂�
  if (cnt == 2)
  { cnt=0; }
  else
  { cnt++; }
  
  //�摜��؂�ւ���
  if(image == "left"){
      document.getElementById("image").src=img_left[cnt].src;
  }
  if(image == "right"){
      document.getElementById("image").src=img_right[cnt].src;
  } 
}


/********** �L�[�{�[�h�̃C�x���g�i�����ꂽ�j **********/

function keyup(event) // �����ꂽ�L�[�̃t���O���@�O�@�ɂ���
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