import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { PrismicLinkProps } from '@prismicio/react'
import { linkResolver } from '../utils/linkResolver'

const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive = false,
  className,
  ...other
}: {
  children: React.ReactNode
  to: PrismicLinkProps | string
  activeClassName: string
  partiallyActive?: boolean
  className: string
}) => {
  const internal = /^\/(?!\/)/.test(to as string)
  //   TODO: link resolving...
  // to = linkResolver(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to as string}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        className={className}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to as string} className={className} {...other}>
      {children}
    </a>
  )
}
export default Link
