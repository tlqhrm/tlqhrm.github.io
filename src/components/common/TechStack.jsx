import React from 'react'

export default function TechStack({ items }) {
  return (
    <div className="tech-stack mt-4 p-3 bg-gray-50/90 border border-black/5 rounded-lg">
      <div className="flex items-center mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-1.5">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#6c757d" opacity="0.8"/>
          <path d="M12 8L8 10V14L12 16L16 14V10L12 8Z" fill="#6c757d"/>
        </svg>
        <span className="text-gray-500 text-sm font-semibold">기술 스택</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((tech, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
