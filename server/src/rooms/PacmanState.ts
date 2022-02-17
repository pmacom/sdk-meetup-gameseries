import { Schema, Context, ArraySchema, MapSchema, type } from "@colyseus/schema";

export class Player extends Schema {
  @type("string") name: string;
  @type("string") role: string;  // Pacman, Ghost, Spect
  @type("number") positionX: number;
  @type("number") positionY: number;
  @type("number") positionZ: number;
  @type("number") rotationX: number;
  @type("number") rotationY: number;
  @type("number") rotationZ: number;
  @type("number") score: number;
}

let pelletCounter: number = 0
export class Pellet extends Schema {
  @type("number") id: number;
  @type("number") x: number;
  @type("number") y: number;
  @type("boolean") visible: boolean;

  constructor({ x, y }: {x: number, y:number}){
    super()
    this.visible = true
    this.id = pelletCounter++
    this.x = x
    this.y = y
  }
}

export class Floor extends Schema {
  @type("number") x: number;
  @type("number") y: number;
}

export class Wall extends Schema {
  @type("number") x: number;
  @type("number") y: number;
}

export class Level extends Schema {
  @type([Pellet]) pellets = new ArraySchema<Pellet>()
  @type([Pellet]) powerPellets = new ArraySchema<Pellet>()
  @type([Wall]) walls = new ArraySchema<Wall>()
  @type([Floor]) floor = new ArraySchema<Floor>()
}

export class PacmanState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
  @type([Pellet]) pellets = new ArraySchema<Pellet>()
  @type([Pellet]) powerPellets = new ArraySchema<Pellet>()
  @type([Wall]) walls = new ArraySchema<Wall>()
  @type([Floor]) floor = new ArraySchema<Floor>()
}
