import React from 'react'

const TextSlice = ({ children }) => {
  return (
    <div className="">
      <div className="px-0 mx-auto my-12 max-w-7xl sm:my-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose lg:prose-xl prose-a:text-red-500 hover:prose-a:text-red-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextSlice
