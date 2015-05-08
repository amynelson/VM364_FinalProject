#pragma strict

var platform: Transform;
var speed: float=3;
var xOffset: float=-2;


function Start () {
//	platform.transform.position.x=xOffset;
//	platform.transform.Translate.x=xOffset;
}

function Update () {
	platform.transform.position.x = -Mathf.PingPong(Time.time*speed, 8) +4;
}
