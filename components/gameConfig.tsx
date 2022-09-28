
import { useRecoilState } from "recoil"
import { gameConfigState } from "../atoms/modalAtom"

function gameConfig() {
  const [gameConfig, setGameConfig] = useRecoilState(gameConfigState)
  return (
    <div>
      This is gameConfig
      {gameConfig!.id}
    </div>
  )
}

export default gameConfig