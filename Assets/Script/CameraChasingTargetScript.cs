using UnityEngine;
using System.Collections;

public class CameraChasingTargetScript : MonoBehaviour {
  // Target Object
	public GameObject targetObject;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		// 現在位置をPositionに代入
		Vector3 Position = targetObject.transform.position;
		// Z軸修正
		Position.z = -8;
		// 現在の位置に加算減算を行ったPositionを代入する
		transform.position = Position;
	}
}