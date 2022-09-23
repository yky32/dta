import Image from "next/image"

interface Props {
  title: string
  gameImageUrl: string
  tags: string[]
}
function GameCard({ title, gameImageUrl, tags }: Props) {
  return (
    <div className="bg-white cursor-pointer bg-opacity-10 h-60 min-h-fit rounded-lg"
      onClick={() => alert("123")}
    >
      <div className="relative h-5/6 ">
        <Image
          src={gameImageUrl}
          className="rounded-lg object-cover"
          layout="fill"
        />
      </div>

      <div className="flex items-center gap-x-2 px-4 h-1/6"> {/* game info */}
        {tags.map((tag, key) => (
          <div className="bg-gray-400 bg-opacity-10 rounded-md text-primary-1 text-lg">{tag}</div>
        ))}

        <div className="text-lg">{title}</div>
      </div>
    </div>
  )
}

export default GameCard