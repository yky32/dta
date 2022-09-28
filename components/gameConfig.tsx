
import { useRecoilState } from "recoil"
import { gameConfigState } from "../atoms/modalAtom"
import QuestionRow from "./fragments/questionRow"

const GameConfig = () => {
  const [gameConfig, setGameConfig] = useRecoilState(gameConfigState)
  return (
    <div className="config-form">
      This is gameConfig {gameConfig!.id}
      {gameConfig?.settings.map((setting, key) => (
        <div className="flex" key={key}>
          <QuestionRow data={setting}/>
        </div>
      ))}
    </div>
  )
}

export default GameConfig