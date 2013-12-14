#pragma strict

// GUIに使うSkin
var skin : GUISkin;
// 切り替え先のScene名
var sceneName:String = "";
// ボタンの名前
var buttonLabel:String = "";
// ボタンの幅
var buttonWidth:float = 0;
// ボタンの高さ
var buttonHeight:float = 0;
// 座標をズラす値X
var offsetX:float = 0;
// 座標をズラす値Y
var offsetY:float = 0;
// ボタンの座標X
private var buttonPositionX:float = 0;
// ボタンの座標Y
private var buttonPositionY:float = 0;

function Start () {
	buttonPositionX = Screen.width/2 - buttonWidth/2 - offsetX;
	buttonPositionY = Screen.height/2 - buttonHeight/2 - offsetY;
}

function Update () {
}

function OnGUI(){
  // Skin代入
	GUI.skin=skin;
  // GUI生成
	if(GUI.Button(new Rect(buttonPositionX,buttonPositionY, buttonWidth, buttonHeight), buttonLabel, "button")){
		Application.LoadLevel(sceneName);
	}
}