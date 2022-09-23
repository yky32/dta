import Image from "next/image"
import { 
  HiInformationCircle, HiOutlineHashtag
} from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
interface Props {
  title: string
  players: number
  gameImageUrl: string
  tags: string[]
}
function GameCard({ title, gameImageUrl, players, tags }: Props) {
  return (
    <div className="relative bg-white cursor-pointer bg-opacity-10 h-fit rounded-lg "
      onClick={() => alert("123")}
    >
      <div className="relative h-52">
        <Image
          src={gameImageUrl}
          className="rounded-lg object-cover"
          layout="fill"
        />
      </div>

      <div className="px-4 py-4 space-y-1"> {/* game info */}
        <div className="flex items-center gap-x-3">
          <div className="text-3xl"><HiInformationCircle/></div>
          <div className="text-2xl">{title} </div>
          <div className="text-3xl"><BsPeopleFill/></div>
          <div className="text-2xl text-secondary-2"> {players}+</div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="text-3xl text-gray-400"><HiOutlineHashtag/></div>
          {tags.map((tag, key) => (
            <div key={key} className="bg-gray-400 bg-opacity-10 rounded-md text-primary-1 text-lg">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameCard