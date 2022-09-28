
import { useRecoilState } from "recoil"
import { gameConfigState } from "../atoms/modalAtom"

const GameConfig = () => {
  const [gameConfig, setGameConfig] = useRecoilState(gameConfigState)
  return (
    <div className="config-form">
      This is gameConfig {gameConfig!.id}
        {gameConfig?.settings.map((setting, key) => (
          <div className="flex" key={key}>
            <div className="w-2/6 text-2xl">{setting.question}</div>
            <div className="w-full text-2xl">{setting.answer}</div>
          </div>
        ))}
    </div>
  )
}

export default GameConfig