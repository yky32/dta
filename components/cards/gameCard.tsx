import Image from "next/image"

interface Props{
  title: String
  tags: String[]
}
function GameCard({title, tags}: Props) {
  return (
    <div>
      {title} <br/>
      {tags}

      <Image
        src={`https://cdn.discordapp.com/attachments/1022347629344063581/1022347699422503003/d681acd50b03a07815103f41543abba8.jpeg`}
        className="rounded-sm object-cover md:rounded"
        width={250}
        height={250}
      />
    </div>
  )
}

export default GameCard