import GameCard from '../components/cards/gameCard'
import MainLayout from '../layouts/mainLayout'


const Home = () => {
  const games = [
    {
      id: 1,
      title: '狼人殺',
      players: 9,
      gameImageUrl: 'https://cdn.discordapp.com/attachments/1022347629344063581/1022347699422503003/d681acd50b03a07815103f41543abba8.jpeg',
      tags: ['mind', '9']
    }
  ]

  return (
    <div className='space-y-6'>
      <section>
        <div className='text-2xl'>Please choose your game.</div>
      </section>

      <section>
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
      </section>

    </div>
  )
}

Home.layout = MainLayout
export default Home
