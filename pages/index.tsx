import GameCard from '../components/cards/gameCard'
import MainLayout from '../layouts/mainLayout'
import { Game } from '../typings';
import requests from '../utils/requests';
interface Props {
  games: Game[]
}

const Home = ({games}: Props) => {
  return (
    <div className='space-y-4 layout'>
      <div className='text-2xl'>Please choose your game. haha</div>

      <div className="grid 
        grid-cols-1 gap-4
        md:grid-cols-2 md:gap-8
        ">
          {games.map((game, index) =>
            <GameCard
              key={index} 
              gameId={game.id}
              title={game.title}
              players={game.players}
              gameImageUrl={game.gameImageUrl} 
              tags={game.tags} 
              />
          )}
        </div>
    </div>
  )
}

Home.layout = MainLayout
export default Home

export const getServerSideProps = async () => {
  const [
    games
  ] = await Promise.all([
    fetch(requests.fetchGames).then((res) => res.json()),
  ])

  return {
    props: {
      games: games,
    },
  }
}