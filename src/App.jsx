import React, { useState, useEffect, useRef } from 'react'
import { sectionTitles } from './data/portfolio'

// Layout Components
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import MobileNav from './components/layout/MobileNav'
import ChatInput from './components/layout/ChatInput'
import ProfileModal from './components/layout/ProfileModal'
import ImageModal from './components/layout/ImageModal'

// Section Components
import IntroSection from './components/sections/IntroSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CertificationsSection from './components/sections/CertificationsSection'

export default function App() {
  const [currentSection, setCurrentSection] = useState('intro')
  const [isPdfMode, setIsPdfMode] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [imageModalState, setImageModalState] = useState({ isOpen: false, images: [], index: 0 })
  const [showStartMessage, setShowStartMessage] = useState(false)
  const [showEndMessage, setShowEndMessage] = useState(false)

  const chatMessagesRef = useRef(null)

  // Scroll observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll('.chat-section')
    const chatMessages = chatMessagesRef.current

    if (!chatMessages) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        root: chatMessages,
        threshold: 0.3,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Show start message after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowStartMessage(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Show end message when scrolled to bottom
  useEffect(() => {
    const chatMessages = chatMessagesRef.current
    if (!chatMessages) return

    const handleScroll = () => {
      const isAtBottom = chatMessages.scrollHeight - chatMessages.scrollTop <= chatMessages.clientHeight + 100
      if (isAtBottom) setShowEndMessage(true)
    }

    chatMessages.addEventListener('scroll', handleScroll)
    return () => chatMessages.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleToggleMode = () => {
    setIsPdfMode(!isPdfMode)
  }

  const handleImageClick = (images, index) => {
    setImageModalState({ isOpen: true, images, index })
  }

  const handleCloseImageModal = () => {
    setImageModalState({ isOpen: false, images: [], index: 0 })
  }

  const handleDownloadPdf = () => {
    // 현재 모드 저장
    const wasNotPdfMode = !isPdfMode

    // PDF 모드로 전환 (이미 PDF 모드가 아닌 경우)
    if (wasNotPdfMode) {
      setIsPdfMode(true)
    }

    // 렌더링 완료 대기 후 인쇄 (PDF 모드 전환 및 렌더링 시간 확보)
    setTimeout(() => {
      const originalTitle = document.title
      document.title = 'Developer Portfolio - 김지훈'

      // 브라우저의 인쇄 기능 호출
      window.print()

      // 원래 타이틀 복원
      document.title = originalTitle

      // 원래 모드로 복원 (PDF 모드가 아니었던 경우)
      if (wasNotPdfMode) {
        setTimeout(() => setIsPdfMode(false), 1000)
      }
    }, 500)
  }

  return (
    <div className={`min-h-screen font-sans ${isPdfMode ? 'pdf-mode bg-white' : 'bg-gray-200'}`}>
      <div className={`flex min-h-screen max-w-main mx-auto ${isPdfMode ? 'block' : ''}`}>
        {/* Sidebar - PC Only */}
        {!isPdfMode && (
          <Sidebar currentSection={currentSection} onSectionClick={handleSectionClick} />
        )}

        {/* Main Chat Container */}
        <main className={`flex-1 h-screen flex flex-col bg-chat-gray relative ${isPdfMode ? 'w-full max-w-pdf mx-auto h-auto overflow-visible' : 'max-w-chat w-full lg:w-chat-desktop xl:w-chat-large lg:m-0'}`}>
          {/* Header */}
          <Header
            currentSection={currentSection}
            sectionTitles={sectionTitles}
            isPdfMode={isPdfMode}
            onToggleMode={handleToggleMode}
            onDownloadPdf={handleDownloadPdf}
          />

          {/* Mobile Navigation */}
          {!isPdfMode && (
            <MobileNav currentSection={currentSection} onSectionClick={handleSectionClick} />
          )}

          {/* Chat Messages */}
          <div
            ref={chatMessagesRef}
            className={`flex-1 overflow-y-auto px-4 py-5 bg-chat-bg flex flex-col gap-2 ${isPdfMode ? 'h-auto overflow-visible px-10 py-8 bg-white' : ''}`}
          >
            {/* Start Message */}
            {!isPdfMode && (
              <div className={`text-center my-5 transition-all duration-300 ${showStartMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                <span className="inline-block bg-black/10 text-gray-500 py-2 px-4 rounded-2xl text-sm border border-black/5">
                  대화가 시작되었습니다
                </span>
              </div>
            )}

            {/* Sections */}
            <IntroSection onAvatarClick={() => setIsProfileModalOpen(true)} />
            <SkillsSection onAvatarClick={() => setIsProfileModalOpen(true)} />
            <ExperienceSection onAvatarClick={() => setIsProfileModalOpen(true)} />
            <ProjectsSection onAvatarClick={() => setIsProfileModalOpen(true)} onImageClick={handleImageClick} />
            <CertificationsSection onAvatarClick={() => setIsProfileModalOpen(true)} />

            {/* End Message */}
            {!isPdfMode && (
              <div className={`text-center my-5 transition-all duration-300 ${showEndMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}>
                <span className="inline-block bg-black/10 text-gray-500 py-2 px-4 rounded-2xl text-sm border border-black/5">
                  감사합니다. 좋은 하루 되세요 :)
                </span>
              </div>
            )}
          </div>

          {/* Chat Input */}
          {!isPdfMode && <ChatInput />}
        </main>
      </div>

      {/* Modals */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <ImageModal
        images={imageModalState.images}
        initialIndex={imageModalState.index}
        isOpen={imageModalState.isOpen}
        onClose={handleCloseImageModal}
      />
    </div>
  )
}
