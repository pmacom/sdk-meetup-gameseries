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