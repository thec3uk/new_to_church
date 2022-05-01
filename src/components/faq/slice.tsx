import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import FAQList from './list'

export default function FAQs({ data }) {
  return (
    <div className="">
      <div className="px-0 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <div>
            {data.primary.eyebrow_headline && (
              <h3 className="text-xl font-bold text-left text-gray-900/70 sm:text-2xl">
                {data.primary.eyebrow_headline.text}
              </h3>
            )}
            <h2 className="mb-3 text-3xl font-extrabold text-left text-gray-900 sm:text-4xl">
              {data.primary.faqTitle.text}
            </h2>
            <PrismicRichText field={data.primary.description.richText} />
          </div>

          <FAQList faqs={data.items} />
        </div>
      </div>
    </div>
  )
}
