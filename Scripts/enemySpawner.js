#pragma strict

var waves: EnemyWave[];

public class EnemyWave {
    var name: Enemy = staticVariables.enemyBank;
    var amount: int = 1;
    var delay: float = 0.0;
}

public function Awake() {

}
