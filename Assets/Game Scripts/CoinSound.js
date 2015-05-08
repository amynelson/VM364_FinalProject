#pragma strict

var coinSound:AudioClip;

function OnTriggerEnter(info : Collider) {
	if (info.tag == "Coin") {
	coinSound=audio.clip;
	audio.Play();
}	
}