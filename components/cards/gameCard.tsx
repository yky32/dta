import Image from "next/image"

interface Props {
  title: string
  gameImageUrl: string
  tags: string[]
}
function GameCard({ title, gameImageUrl, tags }: Props) {
  return (
    <div className="card relative">
      <Image
          src={gameImageUrl}
          className="object-cover rounded-3xl"
          layout="fill"
        />
      <div className="absolute w-full h-1/5 bottom-0 rounded-bl-3xl rounded-br-3xl bg-gray-400 bg-opacity-40">
        <div className="flex gap-x-1 h-full items-center px-5 text-slate-500 ">
          <div>{title}</div> 
          <div>{tags}</div>
        </div>
      </div>

    </div>
  )
}

export default GameCard