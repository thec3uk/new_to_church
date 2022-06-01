import { PrismicLink } from '@prismicio/react'
import * as React from 'react'

import Search from './search/index'
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const MenuItem = ({ children, to, className }) => {
  const linkClasses =
    'py-4 text-transparent no-underline duration-300 bg-no-repeat transition-bg-position bg-p-full bg-text bg-gradient-to-r bg-clip-text hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero hover:underline lg:mx-2 xl:mx-4 to-black-full'
  return (
    <PrismicLink href={to} className={`${linkClasses} ${className}`}>
      {children}
    </PrismicLink>
  )
}

const Menu = ({ isMobile = true }: { isMobile?: boolean }) => {
  const displayClasses = isMobile ? 'flex flex-col lg:hidden' : 'hidden lg:flex'

  const menu_items = [
    { title: 'Reaching', to: '/reaching' },
    { title: 'Shaping', to: '/shaping' },
    { title: 'About', to: '/about' },
    { title: 'Give', to: '/give' },
    { title: 'Locations', to: '/locations' },
    { title: 'Teaching', to: 'https://teaching.thec3.uk' },
    { title: 'Prayer', to: 'https://prayer.thec3.uk' },
  ]

  const hoverClassNames = [
    'from-red-500-full',
    // 'from-teal-500-full',
    // 'from-yellow-300-full',
  ]

  return (
    <div
      className={`h-full font-bold uppercase text-black text-2xl lg:text-lg my-auto lg:mt-0 lg:col-start-2 lg:col-end-12 justify-center lg:justify-between ${displayClasses} cursor-pointer z-50`}
    >
      <div className="flex-row items-center justify-center hidden lg:flex ">
        <PrismicLink href={'/'} className="w-16 h-16">
          <img src="/manifest-logo.png" />
        </PrismicLink>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row ">
        {menu_items.map((item, index) => {
          return (
            <MenuItem
              to={item.to}
              className={hoverClassNames[index % hoverClassNames.length]}
              key={item.title}
            >
              {item.title}
            </MenuItem>
          )
        })}
        {/* {!isMobile && <Search indices={searchIndices} />} */}
      </div>
    </div>
  )
}

export default Menu
