#pragma strict

private var mouseSensitivity : float = staticVariables.mouseSensitivity;
private var cameraDistance : float = staticVariables.baseCameraDistance;
private var radius : float = staticVariables.baseCameraMoveRadius;
private var lastPosition : Vector3;

function Awake() {
	transform.localPosition = new Vector3(0, cameraDistance, 0);
}

function FixedUpdate() {
	var delta : Vector3 = Input.mousePosition - lastPosition;
	transform.Translate(delta.x * mouseSensitivity, delta.y * mouseSensitivity, 0);
	var dummyPos = transform.localPosition;
	dummyPos.y = 0;
	var clampedPos = Vector3.ClampMagnitude(dummyPos, radius);
	transform.localPosition = new Vector3(clampedPos.x, transform.localPosition.y, clampedPos.z);
	lastPosition = Input.mousePosition;
}
