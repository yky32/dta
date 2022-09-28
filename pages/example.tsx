import { useRouter } from "next/router"
import MainLayout from "../layouts/mainLayout"

interface Props {
  id: string 
}

const Example = ({id}: Props) => {
  // field

  // method

  return (
    <div className='space-y-4 layout'>
      this is example
    </div>
  )
}

Example.layout = MainLayout
export default Example