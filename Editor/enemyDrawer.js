#pragma strict

@CustomPropertyDrawer(EnemyWave)

public class EnemyDrawer extends PropertyDrawer {
	public override function OnGUI(position: Rect, property: SerializedProperty, label: GUIContent) {

        EditorGUI.BeginProperty(position, label, property);
		position = EditorGUI.PrefixLabel(position, GUIUtility.GetControlID(FocusType.Passive), label);
		var indent = EditorGUI.indentLevel;
		EditorGUI.indentLevel = 0;
		var amountRect = new Rect(position.x, position.y, 30, position.height);
		var delayRect = new Rect(position.x + 35, position.y, 50, position.height);
		var nameRect = new Rect(position.x + 90, position.y, position.width - 90, position.height);
		EditorGUI.PropertyField(amountRect, property.FindPropertyRelative("amount"), GUIContent.none);
		EditorGUI.PropertyField(delayRect, property.FindPropertyRelative("delay"), GUIContent.none);
		EditorGUI.PropertyField(nameRect, property.FindPropertyRelative("name"), GUIContent.none);
		EditorGUI.indentLevel = indent;
		EditorGUI.EndProperty();
	}
}
