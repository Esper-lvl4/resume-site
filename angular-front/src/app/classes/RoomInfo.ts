import { UserInfo } from "./UserInfo";

export interface RoomInfo {
  id: number
  name: string
  players: UserInfo[],
  gameNotation: string[],
  gameHasStarted: boolean,
  maxPlayers: number,
}

export function isRoomInfo(item: any): item is RoomInfo {
  return item && typeof item === 'object'
    && typeof item.id === 'number'
    && typeof item.name === 'string'
    && Array.isArray(item.players)
    && Array.isArray(item.gameNotation)
    && typeof item.gameHasStarted === 'boolean'
    && typeof item.maxPlayers === 'number';
}

export default RoomInfo;