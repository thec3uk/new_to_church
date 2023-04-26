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

const NewsletterSignUpWithLocations = ({ data }) => {
  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [locations, setLocation] = useState<string[]>([])
  useEffect(() => {
    if (status === 'sending' && message === null) {
      _postEmailToMailchimp(
        email,
        {
          SIGNUPURL: document.location.pathname,
          SOURCE: 'website signup',
          FNAME: name,
          TAGS: '"' + locations.join('", "') + '"',
        },
        setStatus,
        setMessage
      )
    }
  }, [status, message, email])

  const possible_locations = [
    { id: 'BURWE', name: 'Bury St Edmunds' },
    { id: 'CAMWE', name: 'Cambridge' },
    { id: 'CHOWE', name: 'Online' },
    { id: 'COLWE', name: 'Colchester' },
  ]

  return (
    <TitleCard
      title={data.title}
      subtitle={data.subtitle}
      titleImage={data.titleImage}
      colour={data.colour}
    >
      <div className="flex flex-col justify-between h-full -mt-4 prose prose-p:lg:text-xl">
        <PrismicRichText
          field={data.content.richText}
          fallback={<p>No content</p>}
        />

        <form className="h-full">
          {status === 'success' ? (
            <div>{message}</div>
          ) : (
            <div className="h-full">
              <div className="flex flex-col justify-between h-full space-y-3">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-2xl font-bold grow">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Josh"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 text-2xl rounded lg:text-xl grow"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-2xl font-bold grow">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@thec3.uk"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 text-2xl rounded grow lg:text-xl"
                  />
                </div>

                <div className="space-y-1">
                  <fieldset>
                    <legend className="text-2xl font-bold leading-6 text-gray-900 grow">
                      Location
                    </legend>
                    <div className="mt-4 border-gray-200 divide-y divide-gray-200">
                      {possible_locations.map(
                        (
                          location: { id: string; name: string },
                          locationIdx
                        ) => (
                          <label
                            key={locationIdx}
                            htmlFor={`location-${location.id}`}
                            className="relative flex items-start py-1"
                          >
                            <div className="flex-1 min-w-0 text-sm leading-6">
                              <span
                                className="font-medium text-gray-900 select-none"
                              >
                                {location.name}
                              </span>
                            </div>
                            <div className="flex items-center h-6 ml-3">
                              <input
                                id={`location-${location.id}`}
                                name={`locations`}
                                value={location.id}
                                onChange={(event) => {
                                  const { value, checked } = event.target
                                  setLocation((prevLocations) =>
                                    checked
                                      ? [...prevLocations, value]
                                      : prevLocations.filter(
                                        (val: string) => val !== value
                                      )
                                  )
                                }}
                                type="checkbox"
                                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                              />
                            </div>
                          </label>
                        )
                      )}
                    </div>
                  </fieldset>
                </div>
                <button
                  onClick={(e) =>
                    _handleSubmit(e, email, setStatus, setMessage)
                  }
                  className="w-full px-6 py-3 mt-2 text-3xl font-bold text-center capitalize transition-colors duration-300 bg-black rounded shadow lg:py-3 lg:text-3xl text-gray-50 hover:text-red-500"
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

export default NewsletterSignUpWithLocations
