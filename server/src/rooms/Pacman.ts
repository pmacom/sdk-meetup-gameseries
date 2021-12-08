import { Room, Client } from "colyseus";
import { PacmanState, Player } from "./PacmanState";

const ROUND_DURATION = 60 * 3;
// const ROUND_DURATION = 30;

// const MAX_BLOCK_HEIGHT = 5;
const MAX_BLOCK_HEIGHT = 19;

export class MyRoom extends Room<PacmanState> {
  private currentHeight: number = 0;
  private isFinished: boolean = false;

  onCreate (options: any) {
    this.setState(new PacmanState());

    // set-up the game!
    this.setUp();

    this.onMessage("message", (client: Client, atPosition: any) => {
      
    });
  }

  setUp() {
    // Set up the game
  }

  onJoin (client: Client, options: any) {
    const newPlayer = new Player().assign({
      name: options.userData.displayName || "Anonymous",
    });
    this.state.players.set(client.sessionId, newPlayer);

    console.log(newPlayer.name, "joined! => ", options.userData);
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
