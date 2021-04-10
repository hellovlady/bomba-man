import {
	AddBomb,
	CharacterKeyboardConfig,
	GameMap,
	KeyboardEventCode,
	PlayerId,
	TopLeftCoordinates,
} from 'containers/Game/types';
import { Direction } from 'enums';
import config from 'config';
import { useRef, useEffect } from 'react';
import { resetRotation, canMove, handleRotateMove } from 'utils/game';
import { OnMove, Players } from 'containers/Game/Game';
import useInterval from './useInterval';

type ActionBaseProps = [
	coordinates: TopLeftCoordinates,
	keys: CharacterKeyboardConfig
];

type MoveAction = (
	...args: [
		...ActionBaseProps,
		...[id: PlayerId, ref: React.RefObject<HTMLDivElement>]
	]
) => void;

type BombAction = (...args: ActionBaseProps) => void;

type NPCAction = (players: Players) => void;

const usePlayerEvents = (
	players: Players,
	onMove: OnMove,
	gameMap: GameMap,
	is3D: boolean,
	addBomb: AddBomb,
	handleNpcActions?: NPCAction
) => {
	const timeOutRef = useRef<{ [key in PlayerId]?: number }>({
		P1: new Date().getTime(),
		P2: new Date().getTime(),
		P3: new Date().getTime(),
		P4: new Date().getTime(),
	});
	const keyMap = useRef<
		{
			[key in KeyboardEventCode]?: boolean;
		}
	>({});

	useInterval(() => {
		handleNpcActions?.(players);
	}, config.duration.movement);

	useEffect(() => {
		const move: MoveAction = (
			{ top, left },
			{ MoveUp, MoveRight, MoveDown, MoveLeft },
			id,
			ref
		) => {
			// reset rotation to 0 so the animations are consistent
			if (is3D) resetRotation(ref);

			if (keyMap.current[MoveUp]) {
				const newTop = top - config.size.movement;
				const newLeft = left;
				if (canMove(newTop, newLeft, gameMap)) {
					setTimeout(() => {
						onMove(id, { top: newTop, left: newLeft });
						handleRotateMove(ref, is3D, Direction.UP);
					}, 0);
				}
			}
			if (keyMap.current[MoveRight]) {
				const newTop = top;
				const newLeft = left + config.size.movement;
				if (canMove(newTop, newLeft, gameMap)) {
					setTimeout(() => {
						onMove(id, { top: newTop, left: newLeft });
						handleRotateMove(ref, is3D, Direction.RIGHT);
					}, 0);
				}
			}
			if (keyMap.current[MoveDown]) {
				const newTop = top + config.size.movement;
				const newLeft = left;
				if (canMove(newTop, newLeft, gameMap)) {
					setTimeout(() => {
						onMove(id, { top: newTop, left: newLeft });
						handleRotateMove(ref, is3D, Direction.DOWN);
					}, 0);
				}
			}
			if (keyMap.current[MoveLeft]) {
				const newTop = top;
				const newLeft = left - config.size.movement;
				if (canMove(newTop, newLeft, gameMap)) {
					setTimeout(() => {
						onMove(id, { top: newTop, left: newLeft });
						handleRotateMove(ref, is3D, Direction.LEFT);
					}, 0);
				}
			}
		};

		const bomb: BombAction = ({ top, left }, { DropBomb }) => {
			if (keyMap.current[DropBomb]) {
				addBomb({
					top,
					left,
				});
			}
		};

		const registerKeys = (e: KeyboardEvent, isKeyDown: boolean) => {
			/** @see https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript#answer-12444641 */
			keyMap.current[e.code as KeyboardEventCode] = isKeyDown;
		};

		const handleActions = () => {
			if (!keyMap.current) return;

			// TODO: Do not account for NPCs here
			// Instead of Array<PlayerId> it will be Array<PlayerConfig> ??
			// This will include player type, player options etc.
			(Object.keys(players) as Array<PlayerId>).forEach(id => {
				const { coordinates } = players[id]!;
				const { [id]: keys } = config.keyboardConfig.player;
				const { ref } = players[id]!;

				if (ref.current) {
					const newTime = new Date().getTime();
					if (
						newTime - timeOutRef.current[id]! >
						config.duration.movement
					) {
						timeOutRef.current[id] = newTime;
						move(coordinates, keys, id, ref);
					}
				}
				bomb(coordinates, keys);
			});
		};

		const handleKeyEvent = (e: KeyboardEvent) => {
			if (!keyMap.current) return;
			if (!timeOutRef.current) return;

			const isKeyDown = e.type === 'keydown';
			registerKeys(e, isKeyDown);

			if (!isKeyDown) return;
			handleActions();
		};

		window.addEventListener('keyup', handleKeyEvent);
		window.addEventListener('keydown', handleKeyEvent);

		return () => {
			window.removeEventListener('keyup', handleKeyEvent);
			window.removeEventListener('keydown', handleKeyEvent);
		};
	}, [addBomb, gameMap, is3D, onMove, players]);

	return {};
};

export default usePlayerEvents;
