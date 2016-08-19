#pragma strict

var waves: EnemyWave[];
private var spawnerTime: float = 0;
private var nextWaveTime:float = 0;
private var spawnerWave: int = 0;

public class EnemyWave {
    // var name: String = "";
    var name: Enemy = staticVariables.enemyBank;
    var amount: int = 1;
    var delay: float = 0.0;
}

public function Awake() {
    nextWaveTime = waves[0].delay;
}

public function FixedUpdate() {
    spawnerTime += Time.deltaTime;
    if(spawnerTime >= nextWaveTime) {
        var wave = waves[spawnerWave];
        for (var i = 0; i < wave.amount; i++) {
            Instantiate(Resources.Load("Enemy/" + wave.name));
        }
        spawnerWave++;
        if(spawnerWave == waves.length) {
            GetComponent(enemySpawner).enabled = false;
            return;
        }

        nextWaveTime = spawnerTime + waves[spawnerWave].delay;
    }
}
