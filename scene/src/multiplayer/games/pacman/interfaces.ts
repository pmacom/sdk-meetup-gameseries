export interface PacmanTilePosition {
  x: number,
  y: number,
}

export interface PacmanLevelData {
  walls: PacmanTilePosition[],
  floor: PacmanTilePosition[],
  pellets: PacmanTilePosition[],
  powerPellets: PacmanTilePosition[],
}

export interface PacmanPlayerData {
  name: string,
  role: string,
  positionX: number,
  positionY: number,
  positionZ: number,
}

export interface UserTransform {
  positionX: number,
  positionY: number,
  positionZ: number,
  rotationX: number,
  rotationY: number,
  rotationZ: number,
}

export interface PacmanGameState {
  players: PacmanPlayerData[]
}