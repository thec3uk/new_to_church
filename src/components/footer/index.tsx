import { PrismicLink } from '@prismicio/react'
import * as React from 'react'
import FooterList from './footerList'

import { linkResolver } from '../../utils/linkResolver'

const Footer = ({ data }) => {
  const colours = [
    'hover:text-red-500',
    // 'hover:text-teal-500',
    // 'hover:text-yellow-300',
  ]

  return (
    <footer>
      <div className="w-screen px-2 mt-16 mb-24 lg:mb-10 lg:grid md:grid-cols-12 md:gap-x-4 md:px-4">
        <div className="flex flex-col w-full pt-4 space-y-8 border-t md:flex-row md:space-y-0 md:space-x-8 border-t-black md:justify-between lg:col-start-2 lg:col-end-12">
          {data.map(({ primary, items }, idx) => {
            return (
              <FooterList key={primary.title} title={primary.title}>
                {items.map((link) => (
                  <PrismicLink
                    key={link.link_title}
                    className={`transition-colors duration-300 ${colours[0]}`}
                    field={link.link_url}
                    linkResolver={linkResolver}
                  >
                    {link.link_title}
                  </PrismicLink>
                ))}
              </FooterList>
            )
          })}
        </div>

      </div>
      <div className='w-screen px-2 my-2 lg:mb-4 lg:grid md:grid-cols-12 md:gap-x-4 md:px-4 '>
        <div className='lg:col-start-2 lg:col-end-12 text-sm text-black/80 border-t-black/50 border-t pt-2'>
          <p >Charity number: 1132699</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
