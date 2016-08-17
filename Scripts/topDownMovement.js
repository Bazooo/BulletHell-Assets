#pragma strict

private var speed:float = staticVariables.baseCharSpeed;
private var sprintMod:float = staticVariables.baseCharSprintMod;
private var gravity:float = staticVariables.baseGravity;
private var charRigidbody:Rigidbody;
private var movement:Vector3;

function Awake() {
	charRigidbody = GetComponent(Rigidbody);
}

function FixedUpdate() {
	var mX = Input.GetAxisRaw("Horizontal");
	var mY = Input.GetAxisRaw("Vertical");

	MoveChar(mX, mY);
}

function MoveChar(x:float, y:float) {
	movement.Set (x, 0f, y);
	var finalSpeed = speed;
	if(Input.GetAxis("Sprint")) {
		finalSpeed *= sprintMod;
	}
	movement = movement.normalized * finalSpeed * Time.deltaTime;
	charRigidbody.MovePosition(transform.position + movement);
}
