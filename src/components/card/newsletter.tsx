import React, { useState, useEffect } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { PrismicRichText } from '@prismicio/react'
import TitleCard from './title'

const _postEmailToMailchimp = (email, attributes, setStatus, setMessage) => {
  addToMailchimp(email, attributes)
    .then((result) => {
      // Mailchimp always returns a 200 response
      // So we check the result for MC errors & failures
      setMessage(result.msg)
      setStatus(result.result !== 'success' ? 'error' : 'success')
    })
    .catch((err) => {
      // Network failures, timeouts, etc
      setStatus('error')
      setMessage(err)
    })
}

const _handleSubmit = (e, email, setStatus, setMessage) => {
  e.preventDefault()
  e.stopPropagation()
  setStatus('sending')
  setMessage(null)
}

const NewsletterSignUp = ({ data }) => {
  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  useEffect(() => {
    if (status === 'sending' && message === null) {
      _postEmailToMailchimp(
        email,
        {
          SIGNUPURL: document.location.pathname,
          SOURCE: 'website signup',
          FNAME: name,
        },
        setStatus,
        setMessage
      )
    }
  }, [status, message, email])

  return (
    <TitleCard
      title={data.title}
      subtitle={data.subtitle}
      titleImage={data.titleImage}
      colour={data.colour}
    >
      <div className="flex flex-col justify-between h-full prose prose-p:lg:text-xl">
        <PrismicRichText
          field={data.content.richText}
          fallback={<p>No content</p>}
        />

        <form className="h-full">
          {status === 'success' ? (
            <div>{message}</div>
          ) : (
            <div className="h-full">
              <div className="flex flex-col justify-between h-full space-y-4">
                <label htmlFor="name" className="text-2xl font-bold grow">
                  name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Josh"
                  onChange={(e) => setName(e.target.value)}
                  className="p-4 text-3xl rounded grow"
                />
                <label htmlFor="email" className="text-2xl font-bold grow">
                  email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="hello@thec3.uk"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 text-3xl rounded grow"
                />
                <button
                  onClick={(e) =>
                    _handleSubmit(e, email, setStatus, setMessage)
                  }
                  className="w-full px-6 py-3 mt-2 text-3xl font-bold text-center transition-colors duration-300 bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50 hover:text-red-500"
                >
                  Subscribe
                </button>
              </div>
              {status === 'error' && (
                <div dangerouslySetInnerHTML={{ __html: message }} />
              )}
            </div>
          )}
        </form>
      </div>
    </TitleCard>
  )
}

export default NewsletterSignUp
