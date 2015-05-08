#pragma strict

var coinValue = 1;

function OnTriggerEnter (info : Collider) {
    if (info.tag == "Player")
        {
        GameMaster.currentScore += coinValue;
        Destroy(gameObject);
        }
        }