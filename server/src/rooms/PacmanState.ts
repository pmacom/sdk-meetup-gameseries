import { Schema, Context, ArraySchema, MapSchema, type } from "@colyseus/schema";

export class Player extends Schema {
  @type("string") name: string;
}
export class PacmanState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
