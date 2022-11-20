import * as React from 'react'

import { XIcon } from '@heroicons/react/solid'
import { PrismicLink } from '@prismicio/react'

import { linkResolver } from '../utils/linkResolver'

const Announcement = ({
  children,
  message,
  url = undefined,
}: {
  children?: React.ReactNode
  message?: string
  url?: any
}) => {
  const [showAnnoucment, setShowAnnouncement] = React.useState(false)
  const storageKey = 'NOTIFICATIONBAR'

  const isPermanentlyClosed = () => {
    const notifications = JSON.parse(localStorage.getItem(storageKey) as string)

    if (!notifications) return false

    const notification = notifications.find((notice) => {
      return (
        notice.message === (message || (children as string)) && notice.closed
      )
    })

    if (notification) {
      return true
    }

    return false
  }

  React.useEffect(() => {
    if (isPermanentlyClosed()) return

    setShowAnnouncement(true)
  })

  const close = (e) => {
    if (e) e.preventDefault()
    setShowAnnouncement(false)

    const notifications =
      JSON.parse(localStorage.getItem(storageKey) as string) || []

    notifications.push({
      message: message || (children as string),
      closed: true,
    })

    localStorage.setItem(storageKey, JSON.stringify(notifications))
  }

  const CloseButton = () => (
    <a
      onClick={close}
      className="text-black hover:text-white hover:cursor-pointer"
    >
      <XIcon className="w-6 h-6" />
    </a>
  )
  return (
    <>
      {showAnnoucment && (
        <>
          {url === undefined ? (
            <div className="absolute w-screen px-0 -mx-2 md:px-4 md:-mx-4 lg:w-full top-4 md:top-auto md:col-start-2 md:relative md:col-span-10 lg:mx-0 lg:px-0">
              <div className="flex justify-between px-2 py-4 mx-2 space-x-2 bg-yellow-300 rounded md:py-4 md:px-3 md:text-xl lg:text-lg md:mx-0 flex-nowrap">
                <div className="grow text-ellipsis">{children}</div>
                <CloseButton />
              </div>
            </div>
          ) : (
            <PrismicLink
              field={url}
              className="absolute w-screen px-0 -mx-2 md:px-4 md:-mx-4 lg:w-full top-4 md:top-auto md:col-start-2 md:relative md:col-span-10 lg:mx-0 lg:px-0"
              linkResolver={linkResolver}
            >
              <div className="flex justify-between px-2 py-4 mx-2 space-x-2 transition-colors duration-300 bg-yellow-300 rounded md:py-4 md:px-3 md:text-xl lg:text-lg md:mx-0 flex-nowrap hover:bg-red-500">
                <div className="grow text-ellipsis">{children}</div>
                <CloseButton />
              </div>
            </PrismicLink>
          )}
        </>
      )}
    </>
  )
}

export default Announcement
