import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: Game) {
  const gameExists = await gameAlreadyExists(game);
  if (gameExists) {
    throw { message: "Game already exists" }
  }
  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result.length > 0 ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;