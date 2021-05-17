// Defaults
const KEY = 'Game';

// Types
const SET_GAME_STATE = `${KEY}/SET_GAME_STATE`;
const START_GAME = `${KEY}/START_GAME`;
const END_GAME = `${KEY}/END_GAME`;
const SET_GAME_MAP = `${KEY}/SET_GAME_MAP`;
// GAME ACTIONS
const CHANGE_DIRECTION = `${KEY}/CHANGE_DIRECTION`;
const CHANGE_IS_WALKING = `${KEY}/CHANGE_IS_WALKING`;
const MAKE_MOVE = `${KEY}/MAKE_MOVE`;
const TRIGGER_MOVE = `${KEY}/TRIGGER_MOVE`;
const DROP_BOMB = `${KEY}/DROP_BOMB`;
const TRIGGER_EXPLOSION = `${KEY}/TRIGGER_EXPLOSION`;
const ON_EXPLOSION_COMPLETE = `${KEY}/ON_EXPLOSION_COMPLETE`;
// GAME SETTINGS
const TRIGGER_GAME_ANIMATION = `${KEY}/TRIGGER_ANIMATION`;
const TOGGLE_GAME_DIMENSION = `${KEY}/TOGGLE_GAME_DIMENSION`;
const TOGGLE_GAME_PERSPECTIVE = `${KEY}/TOGGLE_GAME_PERSPECTIVE`;
const TOGGLE_GAME_TWO_PLAYER = `${KEY}/TOGGLE_GAME_TWO_PLAYER`;
const TOGGLE_GAME_NPC = `${KEY}/TOGGLE_GAME_NPC`;

export {
	KEY,
	SET_GAME_STATE,
	START_GAME,
	END_GAME,
	SET_GAME_MAP,
	TRIGGER_EXPLOSION,
	ON_EXPLOSION_COMPLETE,
	// GAME ACTIONS
	CHANGE_DIRECTION,
	CHANGE_IS_WALKING,
	MAKE_MOVE,
	TRIGGER_MOVE,
	DROP_BOMB,
	// GAME SETTINGS
	TRIGGER_GAME_ANIMATION,
	TOGGLE_GAME_DIMENSION,
	TOGGLE_GAME_PERSPECTIVE,
	TOGGLE_GAME_TWO_PLAYER,
	TOGGLE_GAME_NPC,
};
