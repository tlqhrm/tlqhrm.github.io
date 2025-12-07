import React from 'react'
import { SendIcon } from '../common/Icons'

export default function ChatInput() {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-black/15 py-3 px-4 z-50 shadow-sm">
      <div className="flex items-center gap-2 max-w-full">
        <input
          type="text"
          className="flex-1 py-3 px-4 border border-black/15 rounded-full text-base outline-none bg-chat-gray text-gray-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="메시지를 입력하세요..."
          disabled
        />
        <button
          className="w-11 h-11 border border-ios-blue/30 rounded-full bg-ios-blue text-white flex items-center justify-center cursor-not-allowed shrink-0 shadow-ios disabled:bg-gray-300 disabled:border-gray-300"
          disabled
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}
