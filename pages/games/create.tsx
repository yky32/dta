import GameConfig from "../../components/gameConfig"
import MainLayout from "../../layouts/mainLayout"

const CreateGame = () => {
  // field


  // method
  return (
    <div className='space-y-4 layout'>
      <GameConfig />
    </div>
  )
}

CreateGame.layout = MainLayout
export default CreateGame