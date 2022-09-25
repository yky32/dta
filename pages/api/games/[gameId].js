import data from '../data'

//[id].js
export default function handler(req, res) {
  const { gameId } = req.query;
  const { Games } = data;

  if (gameId) {
    const game = Games.find(value => value.id == gameId);
    return res.status(200).json(game);
  }

  return res.status(400).json({error: "Game not found."})
}
