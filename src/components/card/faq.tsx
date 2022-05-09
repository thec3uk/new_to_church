import * as React from 'react'
import TitleCard from './title'
import { FAQList } from '../faq'
import { faqList } from '../faq/list'

const FAQCard = ({
  title,
  subtitle,
  text,
  to,
  cta,
  titleImage,
  faqs,
  colour,
}: {
  title: string
  subtitle: string
  text: string
  to?: string
  cta?: string
  titleImage?: string
  faqs: faqList
  colour?: string
}) => {
  return (
    <TitleCard
      title={title}
      subtitle={subtitle}
      titleImage={titleImage}
      colour={colour}
    >
      <div className="mb-4">
        <FAQList faqs={faqs} />
      </div>
    </TitleCard>
  )
}

export default FAQCard
