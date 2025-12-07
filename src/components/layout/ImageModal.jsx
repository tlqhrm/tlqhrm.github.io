import React, { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons'

export default function ImageModal({ images, initialIndex, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex || 0)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, initialIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) setCurrentIndex(currentIndex - 1)
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images?.length, onClose])

  if (!isOpen || !images || images.length === 0) return null

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[9999] backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 -right-2.5 bg-white/20 border-none rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer text-xl hover:bg-white/30"
        >
          ×
        </button>

        {/* Navigation - Previous */}
        {images.length > 1 && currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="absolute top-1/2 -translate-y-1/2 -left-[70px] bg-black/50 border-none rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer hover:bg-black/70"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Navigation - Next */}
        {images.length > 1 && currentIndex < images.length - 1 && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="absolute top-1/2 -translate-y-1/2 -right-[70px] bg-black/50 border-none rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer hover:bg-black/70"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
