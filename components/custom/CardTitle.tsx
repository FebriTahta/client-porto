import { ReactElement } from "react"

const CardTitle = ({children}:{children:ReactElement}) => {
  return (
    <div className="py-[100px] lg:py-[150px] text-center mb-10 bg-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {children}
    </div>
  )
}

export default CardTitle