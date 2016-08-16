#pragma strict

private var speed:float = staticVariables.baseCharSpeed;
private var maxSpeed:float = staticVariables.baseCharMaxSpeed;
private var sprintMod:float = staticVariables.baseCharSprintMod;
private var gravity:float = staticVariables.baseGravity;

function FixedUpdate () {
	var finalSpeed = speed;
	var finalMaxSpeed = maxSpeed;
	if(Input.GetAxis("Sprint")) {
		finalSpeed *= sprintMod;
		finalMaxSpeed *= sprintMod;
	}
	var targetVelocity = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	targetVelocity = transform.TransformDirection(targetVelocity) * finalSpeed;

	var velocity = GetComponent.<Rigidbody>().velocity;
	var velocityChange = targetVelocity - velocity;
	velocityChange.x = Mathf.Clamp(velocityChange.x, -finalMaxSpeed, finalMaxSpeed);
	velocityChange.z = Mathf.Clamp(velocityChange.z, -finalMaxSpeed, finalMaxSpeed);
	velocityChange.y = 0;

	GetComponent.<Rigidbody>().AddForce(velocityChange, ForceMode.VelocityChange);
	GetComponent.<Rigidbody>().AddForce(Vector3 (0, -gravity * GetComponent.<Rigidbody>().mass, 0));
}
