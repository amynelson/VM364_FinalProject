#pragma strict

var platform: Transform;
var speed: float=3;
function Start () {

}

function Update () {
	platform.transform.position.x = Mathf.PingPong(Time.time*speed, 8) -4;
}
