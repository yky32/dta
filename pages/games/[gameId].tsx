import MainLayout from "../../layouts/mainLayout"
import { useRouter } from 'next/router'
import InGameCard from "../../components/cards/inGameCard"

const InGame = () => {
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
            title={""}
            gameId={Number(gameId)}
            gameImageUrl={""}
            status={""}
          />
        </div>
      </section>
    </div>
  )
}

InGame.layout = MainLayout
export default InGame
