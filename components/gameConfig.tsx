
import { useRecoilState } from "recoil"
import { gameConfigState } from "../atoms/modalAtom"

const GameConfig = () => {
  const [gameConfig, setGameConfig] = useRecoilState(gameConfigState)
  return (
    <div>
      This is gameConfig
      {gameConfig!.id}
    </div>
  )
}

export default GameConfig