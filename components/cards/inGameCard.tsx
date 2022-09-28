import Image from "next/image"
import {
  HiInformationCircle, HiOutlineHashtag
} from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from 'next/router'
import { Game } from "../../typings";

interface Props {
  game: Game
}
function InGameCard({ game }: Props) {
  const router = useRouter()

  const handleClick = (id: number) => {

  }

  return (
    <div className="relative bg-white cursor-pointer bg-opacity-20 h-fit rounded-xl "
      onClick={() => handleClick(game.id)}
    >
      <div className="relative h-52">
        <Image
          alt=""
          src={game.gameImageUrl}
          className="rounded-lg object-cover"
          layout="fill"
        />
      </div>

      <div className="px-4 py-4 space-y-1"> {/* game info */}
        <div className="flex items-center gap-x-3">
          <div className="text-3xl text-gray-400"><HiInformationCircle /></div>
          <div className="text-2xl text-secondary-2">{game.title} </div>
          <div className="text-3xl text-gray-400"><BsPeopleFill /></div>

        </div>

        <div className="flex items-center gap-x-3">
          <div className="text-3xl text-gray-400"><HiOutlineHashtag /></div>
        </div>
      </div>
    </div>
  )
}

export default InGameCard