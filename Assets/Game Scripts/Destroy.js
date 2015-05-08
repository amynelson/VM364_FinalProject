#pragma strict
        


function OnTriggerEnter (info : Collider) {
    if (info.tag == "Spike")
        {
        Destroy(gameObject);
        }
        }

