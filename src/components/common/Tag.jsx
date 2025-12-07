import React from 'react'

export default function Tag({ children }) {
  return (
    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">
      #{children}
    </span>
  )
}
