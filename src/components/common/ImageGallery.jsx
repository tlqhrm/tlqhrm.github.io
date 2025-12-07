import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

export default function ImageGallery({ images, alt, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerHeight, setContainerHeight] = useState('auto')
  const imageRefs = useRef([])

  // 이미지 로드 시 높이 자동 조절
  const handleImageLoad = (e, index) => {
    if (index === currentIndex) {
      const img = e.target
      setContainerHeight(img.offsetHeight)
    }
  }

  // 슬라이드 변경 시 높이 업데이트
  useEffect(() => {
    const currentImg = imageRefs.current[currentIndex]
    if (currentImg && currentImg.complete) {
      setContainerHeight(currentImg.offsetHeight)
    }
  }, [currentIndex])

  const goToPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
  }

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(images, currentIndex)
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-gray-100 group"
      style={{ height: containerHeight === 'auto' ? 'auto' : `${containerHeight}px`, minHeight: '120px', transition: 'height 0.3s ease' }}
    >
      <div
        className="flex w-full transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt={`${alt} ${index + 1}`}
            className="flex-shrink-0 w-full h-auto object-contain rounded-lg cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{ maxHeight: '400px' }}
            onClick={handleImageClick}
            onLoad={(e) => handleImageLoad(e, index)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-2.5">
          <button
            onClick={goToPrev}
            className="pointer-events-auto bg-black/50 border-none rounded-full w-9 h-9 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110 disabled:opacity-30"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="pointer-events-auto bg-black/50 border-none rounded-full w-9 h-9 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110 disabled:opacity-30"
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
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
  )
}
