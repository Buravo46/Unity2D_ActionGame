#pragma strict

// 切り替え先のScene名を格納している配列
var sceneName:String[];
// 衝突したオブジェクト名を格納している配列
var objectName:String[];

function Start () {
}

function Update () {
}

function OnCollisionEnter2D(collision : Collision2D){
	// 衝突したオブジェクトの名前がBlockならば
	if(collision.gameObject.name == objectName[0]){
		// GameOver
		Application.LoadLevel(sceneName[0]);
	} else if(collision.gameObject.name == objectName[1]){ // 衝突したオブジェクトの名前がGoalならば
		// GameClear
		Application.LoadLevel(sceneName[1]);
	}
}