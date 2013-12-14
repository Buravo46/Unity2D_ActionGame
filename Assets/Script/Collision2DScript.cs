using UnityEngine;
using System.Collections;

public class Collision2DScript : MonoBehaviour {
	// 切り替え先のScene名を格納している配列
	public string[] sceneName;
	// 衝突したオブジェクト名を格納している配列
	public string[] objectName;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	}

	void OnCollisionEnter2D(Collision2D collision){
		// 衝突したオブジェクトのtagがBlockならば
		if(collision.gameObject.tag == objectName[0]){
			// GameOver
			Application.LoadLevel(sceneName[0]);
		} else if(collision.gameObject.tag == objectName[1]){ // 衝突したオブジェクトのtagがGoalならば
			// GameClear
			Application.LoadLevel(sceneName[1]);
		}
	}
}