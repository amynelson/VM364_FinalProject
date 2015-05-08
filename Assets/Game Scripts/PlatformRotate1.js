#pragma strict

var platform: Transform;
var speed: float=.25;
function Start () {

}

function Update () {
	platform.transform.rotation.z = -Mathf.PingPong(Time.time*speed, .4) +.2;
}
