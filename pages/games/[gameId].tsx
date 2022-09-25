import MainLayout from "../../layouts/mainLayout"
import { useRouter } from 'next/router'
import InGameCard from "../../components/cards/inGameCard"
import requests from "../../utils/requests"
import { Game } from "../../typings"
import { GetServerSideProps } from "next"


interface Props {
  game: Game
}

const InGame = async ({game}: Props) => {
  const router = useRouter()
  const { gameId } = router.query

  return (
    <div className='space-y-6'>
      <section>
        <div className='text-2xl'>{gameId}</div>
      </section>

      <section>
        <div className="grid 
        grid-cols-1 gap-4
        md:grid-cols-2 md:gap-8
        ">
          <InGameCard
            game={game}
          />
        </div>
      </section>
    </div>
  )
}

InGame.layout = MainLayout
export default InGame


export const getServerSideProps: GetServerSideProps = async (context) => {
  var params = context.params
  
  if (params) {
    const game : Game = await fetch(`api/games/${params.gameId}`).then((res) => res.json())

    return {
      props: {
        game : game
      },
    }
  }
  

  
}