import React from 'react'

const TextSlice = ({ children }) => {
  return (
    <div className="">
      <div className="px-0 mx-auto my-12 text-justify max-w-7xl sm:my-16 sm:px-3 lg:px-0">
        <div className="max-w-3xl xl:max-w-screen-2xl mx-auto xl:mx-0 prose lg:prose-xl prose-a:text-red-500 hover:prose-a:text-red-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextSlice
