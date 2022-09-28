import MainLayout from "../../layouts/mainLayout"
import { useRouter } from 'next/router'
import requests from "../../utils/requests"
import { Game } from "../../typings"
import InGameCard from "../../components/cards/inGameCard"
import { BsPlusLg } from "react-icons/bs"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { gameConfigState } from "../../atoms/modalAtom"

interface Props {
  game: Game
}

const InGame = ({ game }: Props) => {
  const [created, setCreated] = useState(false)
  const [gameConfig, setGameConfig] = useRecoilState(gameConfigState)
  const router = useRouter()
  const { id } = router.query


  // method
  const handleCreateGame = () => {
    // push to game setting
    setGameConfig({ id: Number(id) })
    router.push(`/games/create`)
  }

  return (
    <div className='space-y-4 layout'>

      <div className="grid 
        grid-cols-1 gap-4
        md:grid-cols-2 md:gap-8
        ">

        {
          !created &&
          <div className="h-52 cursor-pointer rounded-lg border-dotted border-2 border-secondary-2 flex items-center justify-center"
            onClick={() => handleCreateGame()}
          >
            <div className="space-y-2">
              <div className="text-3xl text-secondary-1"><BsPlusLg className="mx-auto" /></div>
              <div className="text-2xl text-secondary-1">Add/開局</div>
            </div>
          </div>
        }

        {
          created &&
          <InGameCard game={game} />
        }

      </div>
    </div>
  )
}

InGame.layout = MainLayout
export default InGame


export async function getServerSideProps(context: { params: any }) {
  console.log(context.params.id)
  const res = await fetch(requests.fetchGames + `/${context.params.id}`)
  const game = await res.json()
  return {
    props: {
      game: game
    }
  }
}