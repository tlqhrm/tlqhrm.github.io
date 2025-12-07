import React from 'react'
import { sectionTitles } from '../../data/portfolio'

const sections = Object.keys(sectionTitles)

export default function Sidebar({ currentSection, onSectionClick }) {
  return (
    <aside className="hidden lg:block w-sidebar bg-white/95 backdrop-blur-lg border-r border-black/15 shadow-xl shrink-0 sticky top-0 h-screen overflow-y-auto">
      <nav className="py-6">
        {sections.map((sectionId) => (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            className={`flex items-center py-3 px-6 mx-3 my-1 no-underline transition-all relative rounded-xl border border-transparent ${
              currentSection === sectionId
                ? 'bg-ios-blue text-white shadow-ios border-ios-blue/50'
                : 'text-gray-500 hover:bg-primary/10 hover:text-gray-700 hover:border-primary/20'
            }`}
            onClick={(e) => {
              e.preventDefault()
              onSectionClick(sectionId)
            }}
          >
            <span className={`text-sm mr-3 w-4 text-center ${currentSection === sectionId ? 'text-white' : 'text-gray-400'}`}>
              •
            </span>
            <span className="text-sm font-medium tracking-wide">{sectionTitles[sectionId]}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
