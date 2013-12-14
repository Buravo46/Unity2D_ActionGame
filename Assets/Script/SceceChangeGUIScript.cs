using UnityEngine;
using System.Collections;

public class SceceChangeGUIScript : MonoBehaviour {
  // GUIに使うSkin
  public GUISkin skin;
  // 切り替え先のScene名
  public string sceneName = "";
  // ボタンの名前
  public string buttonLabel = "";
  // ボタンの幅
  public float buttonWidth = 0;
  // ボタンの高さ
  public float buttonHeight = 0;
  // 座標をズラす値X
  public float offsetX = 0;
  // 座標をズラす値Y
  public float offsetY = 0;
  // ボタンの座標X
  private float buttonPositionX = 0;
  // ボタンの座標Y
  private float buttonPositionY = 0;
  void start (){
    // ボタンの座標X
    buttonPositionX = Screen.width/2 - buttonWidth/2 - offsetX;
    // ボタンの座標Y
    buttonPositionY = Screen.height/2 - buttonHeight/2 - offsetY;
  }
	void OnGUI () {
	  // Skin代入
	  GUI.skin=skin;
    // GUI生成
	  if(GUI.Button(new Rect(buttonPositionX,buttonPositionY, buttonWidth, buttonHeight), buttonLabel, "button")){
		  Application.LoadLevel(sceneName);
	  }
	}
}