import * as React from 'react'
import {
  PrismicLink as BasePrismicLink,
  PrismicLinkProps,
  LinkProps,
} from '@prismicio/react'
import { Link } from 'gatsby'

function InternalLink(props: LinkProps) {
  return <a className="internal" {...props} />
}

const GatsbyLinkShim = ({ href, ...props }: LinkProps) => {
  return <Link to={href} {...props} />
}

export function PrismicLink(props: PrismicLinkProps) {
  return <BasePrismicLink internalComponent={GatsbyLinkShim} {...props} />
}
