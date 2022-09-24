import MainLayout from "../../layouts/mainLayout"
import { useRouter } from 'next/router'

const InGame = () => {
  const router = useRouter()
  const { gameId } = router.query

  return (
    <div>{gameId}</div>
  )
}

InGame.layout = MainLayout
export default InGame
