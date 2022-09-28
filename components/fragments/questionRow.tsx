import { ReactNode } from "react"
import { BsPeopleFill, BsXLg } from "react-icons/bs"

const QuestionRow = ({ data }: any) => {

  function getIcon(icon: string): ReactNode {
    const icons: any = {
      'people': <BsPeopleFill />
    }
    return (
      icons[icon] ? icons[icon] : <BsXLg />
    )
  }

  return (
    <>
      <div className="w-1/6 text-2xl">{getIcon(data.icon)}</div>
      <div className="w-2/6 text-2xl">{data.question}</div>
      
      {!Array.isArray(data.answer) ?

        <div className="w-full text-2xl ">
          {data.answer}
        </div>

        :

        <div className="w-full text-2xl ">
          This is array
        </div>
      }
    </>
  )
}

export default QuestionRow