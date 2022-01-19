import { Room, Client } from "colyseus";
import { ArraySchema } from "@colyseus/schema";
import { Floor, Level, PacmanState, Pellet, Player, Wall } from "./PacmanState";
import level from './levels'

const ROUND_DURATION = 60 * 3;
// const ROUND_DURATION = 30;

// const MAX_BLOCK_HEIGHT = 5;
const MAX_BLOCK_HEIGHT = 19;

export class PacManGame extends Room<PacmanState> {
  private currentHeight: number = 0;
  private isFinished: boolean = false;

  onCreate (options: any) {
    this.setState(new PacmanState());

    // set-up the game!
    this.setUp();

    this.onMessage("message", (client: Client, position: any) => {
    });
  }

  setUp() {
    // console.log(level)
    
  }

  onJoin (client: Client, options: any) {
    const newPlayer = new Player().assign({
      name: options.userData.displayName || "Anonymous",
    });

    this.state.players.set(client.sessionId, newPlayer);
    const { walls, floor, pellets, powerPellets } = level

    this.state.walls = new ArraySchema<Wall>()
    this.state.floor = new ArraySchema<Floor>()
    this.state.pellets = new ArraySchema<Pellet>()
    this.state.powerPellets = new ArraySchema<Pellet>()

    walls.forEach(wall => this.state.walls.push(new Wall(wall)))
    floor.forEach(f => this.state.floor.push(new Floor(f)))
    pellets.forEach(p => this.state.pellets.push(new Pellet(p)))
    powerPellets.forEach(pp => this.state.powerPellets.push(new Pellet(pp)))

    this.onMessage('location', (client: Client, transform: any) => {
      const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = transform
      const player = this.state.players.get(client.sessionId);
      player.positionX = positionX
      player.positionY = positionY
      player.positionZ = positionZ
      player.rotationX = rotationX
      player.rotationY = rotationY
      player.rotationZ = rotationZ

      
      // client.send('updatePlayerLocation',{
      //   playerId: client.sessionId,
      //   positionX,
      //   positionY, 
      //   positionZ
      // })
    })

    

    // console.log(newPlayer.name, "joined! => ", options.userData);
  }

  onLeave (client: Client, consented: boolean) {
    const player = this.state.players.get(client.sessionId);
    console.log(player.name, "left!");

    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    console.log("Disposing room...");
  }

}
