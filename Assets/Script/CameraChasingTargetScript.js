#pragma strict
// Target Object
var targetObject:GameObject;

// Use this for initialization
function Start () {
}
	
// Update is called once per frame
function Update () {
		// 現在位置をカメラ座標に代入
		transform.position = targetObject.transform.position;
		// Z軸修正
		transform.position.z = -8;
}