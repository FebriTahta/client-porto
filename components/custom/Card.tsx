import React, { ReactNode } from 'react'

const Mycard = ({
  title = "",
  description = "",
  icon,
  services_list = [],
  button,
}: {
  title?: string,
  description?: string,
  icon?: ReactNode,
  services_list?: { list_name: string }[],
  button?: JSX.Element
}) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
        <ul className="space-y-4">
            {services_list.map((item, index) => (
                <li className="flex items-center" key={index}>
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                    {item.list_name}
                </li>
            ))}
        </ul>
        <div className="mt-10 flex justify-center">
            {button}
        </div>
    </div>
  )
}

export default Mycard