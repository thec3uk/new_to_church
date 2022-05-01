import * as React from 'react'

const FooterList = ({ title, children }) => {
  return (
    <div className="gap-x-8 flex">
      <h4 className="text-xl font-bold w-2/5 md:w-auto">{title}</h4>
      <div className="flex flex-col md:mt-1 w-2/5 md:w-auto">{children}</div>
    </div>
  )
}

export default FooterList
