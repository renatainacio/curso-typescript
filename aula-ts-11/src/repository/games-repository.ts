import { db } from "../database.connection";
import { Game } from "../protocols/game-protocol";

async function getGames() {
  const games = await db.query<Game>(`
  SELECT * FROM games;
`);
return games.rows;
}

async function createGame(game: Game) {
  await db.query(`
    INSERT INTO games (title, platform) VALUES ($1, $2);
  `, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await db.query<Game>(`
    SELECT * FROM games
    WHERE title=$1 AND platform=$2;
  `, [game.title, game.platform]);
  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;