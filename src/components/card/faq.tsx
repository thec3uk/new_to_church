import * as React from 'react'
import TitleCard from './title'
import { FAQList } from '../faq'

const FAQCard = ({
  title,
  subtitle,
  text,
  to,
  cta,
  titleImage,
  faqs,
}: {
  title: string
  subtitle: string
  text: string
  to?: string
  cta?: string
  titleImage?: string
  faqs: faqList
}) => {
  return (
    <TitleCard title={title} subtitle={subtitle} titleImage={titleImage}>
      <div className="mb-4">
        <FAQList faqs={faqs} />
      </div>
    </TitleCard>
  )
}

export default FAQCard
