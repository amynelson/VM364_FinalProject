#pragma strict

var fan:Transform;

function Start () {

}

function Update () {
	fan.transform.Rotate(0, 100 * Time.deltaTime, 0);
}