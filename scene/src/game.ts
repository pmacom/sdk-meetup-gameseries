import { PacManGame } from "./multiplayer/games/pacman/pacman";
import { connect } from './multiplayer/connection'

const pacman = new PacManGame()

connect('my_room')
