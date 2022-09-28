import Image from "next/image"
import {
  HiInformationCircle, HiOutlineHashtag
} from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from 'next/router'

interface Props {
  title: string
  gameId: number
  players: number
  gameImageUrl: string
  tags: string[]
}
function GameCard({ title, gameId, gameImageUrl, players, tags }: Props) {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/games/${id}`);
  }

  return (
    <div className="relative cursor-pointer bg-white bg-opacity-30 h-fit rounded-xl "
      onClick={() => handleClick(gameId)}
    >
      <div className="relative h-52">
        <Image
          alt=""
          src={gameImageUrl}
          className="rounded-lg object-cover"
          layout="fill"
        />
      </div>

      <div className="px-4 py-4 space-y-1"> {/* game info */}
        <div className="flex items-center gap-x-3">
          <div className="text-3xl text-gray-400"><HiInformationCircle /></div>
          <div className="text-2xl text-secondary-2">{title} </div>
          <div className="text-3xl text-gray-400"><BsPeopleFill /></div>
          <div className="text-2xl text-secondary-2"> {players}+</div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="text-3xl text-gray-400"><HiOutlineHashtag /></div>
          {tags.map((tag, key) => (
            <div key={key} className="bg-gray-400 bg-opacity-10 rounded-md text-primary-1 text-lg">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameCard