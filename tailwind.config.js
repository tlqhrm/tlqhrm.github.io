/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2980b9',
        'primary-dark': '#1a5276',
        'ios-blue': '#007AFF',
        'ios-blue-dark': '#0051D5',
        'chat-bg': '#f8f9fa',
        'chat-gray': '#f2f2f7',
        'border-light': 'rgba(0, 0, 0, 0.1)',
        'border-medium': 'rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'chat': '1400px',
        'main': '1480px',
        'pdf': '210mm',
      },
      width: {
        'sidebar': '220px',
        'chat-desktop': '700px',
        'chat-large': '800px',
      },
      boxShadow: {
        'ios': '0 2px 8px rgba(0, 122, 255, 0.3)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'modal': '0 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 32px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'modal-in': 'modalSlideIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        modalSlideIn: {
          '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
