enum Direction {
	UP = 'UP',
	RIGHT = 'RIGHT',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
}

enum Axis {
	X = 'X',
	Y = 'Y',
}

enum ExplosionState {
	Firing = 'Firing',
	Exploding = 'Exploding',
	Exploded = 'Exploded',
}

enum Player {
	Player1 = 'P1',
	Player2 = 'P2',
	Npc1 = 'P3',
	Npc2 = 'P4',
	Npc3 = 'P5',
}

enum Tile {
	Empty = 'T1',
	Breaking = 'T2',
	NonBreaking = 'T3',
}

enum PowerUp {
	BombSize = 'PU1',
	Speed = 'PU2',
	Invincibility = 'PU3',
}

export { Direction, Axis, ExplosionState, Player, Tile, PowerUp };
