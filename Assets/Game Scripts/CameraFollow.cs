using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {
	
	public Vector3 cameraFollowOffset = new Vector3(0,2,-5);
	public Camera followCamera;
	// Use this for initialization
	void Start () {
		
		if (followCamera == null) {
			
			followCamera = Camera.main;
		}
		
	}
	
	// Update is called once per frame
	void Update () {
		followCamera.transform.position = transform.position + cameraFollowOffset;
	}
}