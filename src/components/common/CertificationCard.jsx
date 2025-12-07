import React from 'react'
import Tag from './Tag'

export default function CertificationCard({ cert }) {
  return (
    <div className="bg-white/90 border border-black/10 rounded-xl p-5 mb-4 shadow-card">
      <div className="mb-3">
        <h6 className="m-0 text-primary text-lg font-semibold">{cert.name}</h6>
        <span className="text-gray-500 text-sm">취득일: {cert.date}</span>
      </div>
      {cert.tags && cert.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cert.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  )
}
