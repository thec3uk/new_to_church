import * as React from 'react'

import { layout, components } from '../../components'

import DefaultCardSlice from './card'
import FAQCardSlice from './faq'
import TextCardSlice from './text'
import TitleCardSlice from './title'
import ImageCardSlice from './image'
import NewsletterSlice from './newsletter'

const CardSlice = ({ slice }) => {
  const variations: Record<string, React.ReactNode> = {
    default: DefaultCardSlice,
    faqCard: FAQCardSlice,
    textCard: TextCardSlice,
    titleCard: TitleCardSlice,
    imageCard: ImageCardSlice,
    newsletterSlice: NewsletterSlice,
  }
  const Component = variations[slice.variation]

  if (slice.variation === 'newsletterSlice') {
    return <Component slice={slice} />
  }
  return (
    <layout.Main hash={slice.id}>
      <Component slice={slice} />
    </layout.Main>
  )
}

export default CardSlice
