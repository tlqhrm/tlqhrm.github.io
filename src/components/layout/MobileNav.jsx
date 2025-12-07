import React from 'react'
import { sectionTitles } from '../../data/portfolio'

const sections = Object.keys(sectionTitles)

export default function MobileNav({ currentSection, onSectionClick }) {
  return (
    <nav className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-b border-black/10 py-2 shadow-sm">
      <div className="flex overflow-x-auto px-4 gap-1 scrollbar-hide">
        {sections.map((sectionId) => (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            className={`flex items-center justify-center py-2.5 px-4 rounded-full no-underline text-sm font-medium whitespace-nowrap transition-all border shrink-0 ${
              currentSection === sectionId
                ? 'bg-ios-blue text-white border-ios-blue shadow-ios'
                : 'text-gray-500 border-black/10 bg-gray-100/80 hover:bg-ios-blue/10 hover:text-ios-blue hover:border-ios-blue/20'
            }`}
            onClick={(e) => {
              e.preventDefault()
              onSectionClick(sectionId)
            }}
          >
            <span>{sectionTitles[sectionId]}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
