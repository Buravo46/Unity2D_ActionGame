#pragma strict
// 速度
var SPEED:Vector2 = Vector2(0.05f, 0.05f);
// Use this for initialization
function Start () {

}
	
// Update is called once per frame
function Update () {
	// 移動処理
	Move();
}

// 移動関数
function Move(){
	// 左キーを押し続けていたら
	if(Input.GetKey("left")){
		// 代入したPositionに対して加算減算を行う
		transform.position.x -= SPEED.x;
	} else if(Input.GetKey("right")){ // 右キーを押し続けていたら
		// 代入したPositionに対して加算減算を行う
		transform.position.x += SPEED.x;
	} else if(Input.GetKey("up")){ // 上キーを押し続けていたら
		// 代入したPositionに対して加算減算を行う
		transform.position.y += SPEED.y;
	} else if(Input.GetKey("down")){ // 下キーを押し続けていたら
		// 代入したPositionに対して加算減算を行う
		transform.position.y -= SPEED.y;
	}
}
