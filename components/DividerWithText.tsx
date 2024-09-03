import React from 'react'

function DividerWithText({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-center items-center my-2">
      <div className="border-b-2 border-medium-light-grey w-10" />
      <span className="mx-4 text-medium-light-grey">{text}</span>
      <div className="border-b-2 border-medium-light-grey w-10" />
    </div>
  )
}

export default DividerWithText