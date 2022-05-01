import * as React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="my-3 md:col-start-10 md:col-span-2 space-y-3">
      {children}
    </aside>
  )
}
export default Aside
