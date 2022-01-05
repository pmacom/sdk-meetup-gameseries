import { Schema, Context, ArraySchema, MapSchema, type } from "@colyseus/schema";

export class Player extends Schema {
  @type("string") name: string;
  @type("string") role: string;
  @type("number") positionX: number;
  @type("number") positionY: number;
  @type("number") positionZ: number;
}
export class PacmanState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
