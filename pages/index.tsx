import GameCard from '../components/cards/gameCard'
import MainLayout from '../layouts/mainLayout'


const Home = () => {
  const games = [
    {
      title: 'Wolf',
      gameImageUrl: 'https://cdn.discordapp.com/attachments/1022347629344063581/1022347699422503003/d681acd50b03a07815103f41543abba8.jpeg',
      tags: ['mind', '9']
    }
  ]

  return (
    <div className='px-8 py-3 space-y-6 bg-bg-1 h-screen'>
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
              title={game.title}
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
