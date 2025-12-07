import React from 'react'
import { ChatIcon, FileIcon, DownloadIcon } from '../common/Icons'

export default function Header({ currentSection, sectionTitles, isPdfMode, onToggleMode, onDownloadPdf }) {
  const isIntro = currentSection === 'intro'
  const sectionTitle = sectionTitles[currentSection]

  return (
    <header className={`bg-white/98 backdrop-blur-xl border-b border-black/15 flex flex-col items-start sticky top-0 z-50 shadow-sm transition-all ${isIntro ? 'py-4 px-5' : 'py-2 px-5'}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1">
            <h1
              id="headerTitle"
              className={`text-2xl font-semibold m-0 text-gray-900 transition-all ${isIntro ? 'block' : 'hidden'}`}
            >
              개발자 김지훈 포트폴리오
            </h1>
            <div
              id="breadcrumb"
              className={`mt-2 text-sm text-gray-500 flex items-center pt-2 ${isIntro ? 'hidden' : 'flex'}`}
            >
              <span className="text-gray-900 font-semibold text-xl">{sectionTitle}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Mode Toggle */}
          <div className="ml-4 hidden sm:block">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-medium whitespace-nowrap transition-colors ${!isPdfMode ? 'text-ios-blue' : 'text-gray-500'}`}>
                대화형
              </span>
              <button
                className="bg-transparent border-none cursor-pointer outline-none p-0"
                onClick={onToggleMode}
                title={isPdfMode ? '대화형으로 전환' : 'PDF 형태로 전환'}
              >
                <div className={`w-[60px] h-8 rounded-2xl relative transition-colors border ${isPdfMode ? 'bg-blue-400/20 border-blue-400/30' : 'bg-ios-blue/20 border-ios-blue/30'}`}>
                  <div className={`w-7 h-7 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform flex items-center justify-center shadow-md border border-black/10 ${isPdfMode ? 'translate-x-7' : ''}`}>
                    <span className={`flex items-center justify-center absolute w-full h-full transition-opacity ${!isPdfMode ? 'opacity-100' : 'opacity-0'}`}>
                      <ChatIcon />
                    </span>
                    <span className={`flex items-center justify-center absolute w-full h-full transition-opacity ${isPdfMode ? 'opacity-100' : 'opacity-0'}`}>
                      <FileIcon />
                    </span>
                  </div>
                </div>
              </button>
              <span className={`text-xs font-medium whitespace-nowrap transition-colors ${isPdfMode ? 'text-blue-500' : 'text-gray-500'}`}>
                PDF
              </span>
            </div>
          </div>

          {/* PDF Download Button */}
          <button
            onClick={onDownloadPdf}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
            title="PDF 다운로드"
          >
            <DownloadIcon className="w-[18px] h-[18px] text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  )
}
