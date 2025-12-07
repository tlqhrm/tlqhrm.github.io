import React from 'react'

export default function InfoCard({ icon, label, value, valueExtra }) {
  return (
    <div className="info-card flex items-center bg-white/80 border border-black/10 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-card-hover shadow-card">
      <div className="info-icon flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-3 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="info-label text-sm text-gray-500 font-medium mb-1">{label}</span>
        <span className="info-value text-sm text-gray-900 font-semibold">{value}</span>
        {valueExtra && <span className="info-value text-sm text-gray-900 font-semibold">{valueExtra}</span>}
      </div>
    </div>
  )
}
