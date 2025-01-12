import { redirect } from "next/navigation"

const page = () => {
  redirect('/about')
  return (
    <div>page</div>
  )
}

export default page