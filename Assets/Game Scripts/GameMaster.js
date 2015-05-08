#pragma strict

var mainSkin:GUISkin;

static var currentScore : int = 0;
var target : Transform;

var offsetY : float = 10;
var sizeX: float = 100;
var sizeY: float = 40;


function Start () {
	if (currentScore!=0) {
	currentScore=0;}
	}
//score keeper
function OnGUI () {
	GUI.skin=mainSkin;
    if (target!=null) {
    GUI.Box (new Rect (15, offsetY, sizeX, sizeY), "Score: " + currentScore);
    }


//menu
 	if (target==null) {
 	 	
 	GUI.BeginGroup(new Rect (Screen.width/2-100, Screen.height/2-105, 200, 210));
 	
 			GUI.Box(new Rect(0,0,200,210), "Game Over");
 	
 	
 			GUI.Label(new Rect(60, 50, 250, 100), "Score: " + currentScore);
 	
 			if (GUI.Button(new Rect(60,100, 75, 25), "Restart")){
 				Application.LoadLevel(Application.loadedLevel);
 				}
 				
 			if (GUI.Button(new Rect(60,140, 75, 25), "Quit")){
 				Application.Quit();
				}
 	GUI.EndGroup();
}
}
 	