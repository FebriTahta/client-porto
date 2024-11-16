import React from 'react'
import { cn } from '@/lib/utils'

const MyButton = ({className, href, text}: {className: string, href: string, text: string}) => {
  return (
    <a href={href} className={cn(`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all dark:bg-white bg-primary rounded dark:hover:bg-white hover:bg-primary group ${className}`)}>
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-white dark:bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-center dark:text-black text-white transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-white font-capitals">
        {text}
      </span>
    </a>
  )
}

export default MyButton