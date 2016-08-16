#pragma strict

public var mouseSensitivity : float = 1.0;
private var cameraDistance : float = staticVariables.baseCameraDistance;
private var lastPosition : Vector3;
private var radius : float = 2.5;

function Awake() {
	transform.localPosition = new Vector3(0, cameraDistance, 0);
}

function FixedUpdate() {
	var delta : Vector3 = Input.mousePosition - lastPosition;
	transform.Translate(delta.x * mouseSensitivity, delta.y * mouseSensitivity, 0);
	transform.localPosition = new Vector3(Mathf.Clamp(transform.localPosition.x, -radius, radius), transform.localPosition.y, Mathf.Clamp(transform.localPosition.z, -radius, radius));
	lastPosition = Input.mousePosition;
}
