import { PrismicRichTextProps } from '@prismicio/react'
import React from 'react'
import FAQ from './faq'

export type faqList = {
  question: string
  answer: PrismicRichTextProps
}[]

const FAQList = ({ faqs }: { faqs: faqList }) => {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-gray-900">
      {faqs.map((faq, idx) => (
        <FAQ key={`${idx}-${faq.question}`}>{faq}</FAQ>
      ))}
    </dl>
  )
}

export default FAQList
