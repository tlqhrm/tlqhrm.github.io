import './style.css'

// DOM Elements
const chatMessages = document.getElementById('chatMessages')
const breadcrumb = document.getElementById('breadcrumb')
const currentSectionEl = document.getElementById('currentSection')
const chatHeader = document.querySelector('.chat-header')
const headerTitle = document.getElementById('headerTitle')
const modeToggle = document.getElementById('modeToggle')
const profileModal = document.getElementById('profileModal')
const imageModal = document.getElementById('imageModal')
const modalImage = document.getElementById('modalImage')

// Section titles mapping
const sectionTitles = {
  'intro': '자기소개',
  'skills-backend': '기술 스택',
  'experience': '경력',
  'projects': '프로젝트',
  'certifications': '자격증'
}

// Current modal image state
let currentModalImages = []
let currentModalIndex = 0

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initNavigation()
  initScrollObserver()
  initGalleries()
  initSystemMessages()
})

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item')

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const sectionId = item.getAttribute('data-section')
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

// Scroll Observer for active section
function initScrollObserver() {
  const sections = document.querySelectorAll('.chat-section')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        updateActiveNav(sectionId)
        updateBreadcrumb(sectionId)
      }
    })
  }, {
    root: chatMessages,
    threshold: 0.3
  })

  sections.forEach(section => observer.observe(section))
}

function updateActiveNav(sectionId) {
  // Update sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-section') === sectionId)
  })

  // Update mobile nav
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-section') === sectionId)
  })
}

function updateBreadcrumb(sectionId) {
  const title = sectionTitles[sectionId]

  if (!headerTitle || !breadcrumb || !currentSectionEl || !chatHeader) {
    return
  }

  if (title && sectionId !== 'intro') {
    // 다른 섹션: 타이틀 숨기고 breadcrumb에 현재 섹션명 표시
    headerTitle.style.display = 'none'
    breadcrumb.style.display = 'flex'
    currentSectionEl.textContent = title
    chatHeader.classList.add('compact')
  } else {
    // intro 섹션: 원래 타이틀 표시
    headerTitle.style.display = 'block'
    breadcrumb.style.display = 'none'
    chatHeader.classList.remove('compact')
  }
}

// Image Gallery
function initGalleries() {
  const galleries = document.querySelectorAll('.image-gallery')

  galleries.forEach(gallery => {
    const container = gallery.querySelector('.image-container')
    const images = container.querySelectorAll('img')
    const nav = gallery.querySelector('.gallery-nav')
    const indicators = gallery.querySelector('.gallery-indicators')
    const prevBtn = gallery.querySelector('.prev-btn')
    const nextBtn = gallery.querySelector('.next-btn')

    if (images.length > 1) {
      nav.style.display = 'flex'
      indicators.style.display = 'flex'

      // Create indicators
      indicators.innerHTML = ''
      images.forEach((_, index) => {
        const indicator = document.createElement('span')
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`
        indicator.onclick = () => goToSlide(container, images, indicators, index)
        indicators.appendChild(indicator)
      })

      // Button handlers
      prevBtn.onclick = () => navigate(container, images, indicators, -1)
      nextBtn.onclick = () => navigate(container, images, indicators, 1)
    }

    // Click to open modal
    images.forEach((img, index) => {
      img.onclick = () => openImageModal(images, index)
    })
  })
}

function navigate(container, images, indicators, direction) {
  const currentIndex = getCurrentIndex(container)
  const newIndex = Math.max(0, Math.min(images.length - 1, currentIndex + direction))
  goToSlide(container, images, indicators, newIndex)
}

function goToSlide(container, images, indicators, index) {
  container.style.transform = `translateX(-${index * 100}%)`

  indicators.querySelectorAll('.indicator').forEach((ind, i) => {
    ind.classList.toggle('active', i === index)
  })
}

function getCurrentIndex(container) {
  const transform = container.style.transform
  const match = transform.match(/translateX\(-(\d+)%\)/)
  return match ? parseInt(match[1]) / 100 : 0
}

// Image Modal
function openImageModal(images, index) {
  currentModalImages = Array.from(images)
  currentModalIndex = index

  updateModalImage()
  imageModal.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function updateModalImage() {
  const img = currentModalImages[currentModalIndex]
  modalImage.src = img.src
  modalImage.alt = img.alt
}

window.closeImageModal = function() {
  imageModal.classList.remove('show')
  document.body.style.overflow = ''
}

window.prevModalImage = function() {
  if (currentModalIndex > 0) {
    currentModalIndex--
    updateModalImage()
  }
}

window.nextModalImage = function() {
  if (currentModalIndex < currentModalImages.length - 1) {
    currentModalIndex++
    updateModalImage()
  }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal()
    closeProfileModal()
  }
})

// Close modal on backdrop click
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    closeImageModal()
  }
})

// Profile Modal
window.openProfileModal = function() {
  profileModal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

window.closeProfileModal = function() {
  profileModal.style.display = 'none'
  document.body.style.overflow = ''
}

// Mode Toggle (Chat/PDF)
window.toggleMode = function() {
  const body = document.body
  const isChatMode = body.classList.contains('chat-mode')

  if (isChatMode) {
    body.classList.remove('chat-mode')
    body.classList.add('pdf-mode')
    modeToggle.classList.remove('chat-mode-active')
    modeToggle.classList.add('pdf-mode-active')
  } else {
    body.classList.remove('pdf-mode')
    body.classList.add('chat-mode')
    modeToggle.classList.remove('pdf-mode-active')
    modeToggle.classList.add('chat-mode-active')
  }
}

// System Messages Animation
function initSystemMessages() {
  const startMessage = document.getElementById('start-message')
  const endMessage = document.getElementById('end-message')

  // Show start message after a delay
  setTimeout(() => {
    startMessage.style.display = 'block'
    setTimeout(() => startMessage.classList.add('show'), 50)
  }, 500)

  // Show end message when scrolled to bottom
  if (chatMessages) {
    chatMessages.addEventListener('scroll', () => {
      const isAtBottom = chatMessages.scrollHeight - chatMessages.scrollTop <= chatMessages.clientHeight + 100

      if (isAtBottom) {
        endMessage.style.display = 'block'
        setTimeout(() => endMessage.classList.add('show'), 50)
      }
    })
  }
}
