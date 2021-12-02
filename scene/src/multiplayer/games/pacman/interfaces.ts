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