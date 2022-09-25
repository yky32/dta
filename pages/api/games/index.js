
import data from '../data'

// api/games
export default function handler(req, res){
    const { Games } = data;
    if(Games) return res.status(200).json(Games)
    return res.status(404).json({ error: "Data Not Found"})
}