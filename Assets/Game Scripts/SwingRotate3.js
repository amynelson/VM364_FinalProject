#pragma strict

var swing: Transform;
var speed: float=.25;
function Start () {

}

function Update () {
	swing.transform.rotation.x = -Mathf.PingPong(Time.time*speed, .2) +.1;
}
