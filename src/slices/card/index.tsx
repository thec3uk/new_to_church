import * as React from 'react'

import { layout, components } from '../../components'

import DefaultCardSlice from './card'
import FAQCardSlice from './faq'
import TextCardSlice from './text'
import TitleCardSlice from './title'
import ImageCardSlice from './image'

const CardSlice = ({ slice }) => {
  const variations: Record<string, React.ReactNode> = {
    default: DefaultCardSlice,
    faqCard: FAQCardSlice,
    textCard: TextCardSlice,
    titleCard: TitleCardSlice,
    imageCard: ImageCardSlice,
  }
  const Component = variations[slice.variation]

  return (
    <layout.Main>
      <Component slice={slice} />
    </layout.Main>
  )
}

export default CardSlice
