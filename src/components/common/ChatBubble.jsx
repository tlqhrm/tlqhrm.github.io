import React from 'react'

export function Question({ children }) {
  return (
    <div className="question flex justify-end mb-4 items-end gap-2 animate-slide-in">
      <div className="relative py-3 px-4 rounded-2xl rounded-br-sm max-w-[85%] ml-auto bg-ios-blue text-white shadow-ios">
        <p className="m-0 leading-relaxed text-[15px]">{children}</p>
      </div>
    </div>
  )
}

export function Answer({ children, onAvatarClick }) {
  return (
    <div className="answer flex justify-start mb-5 items-start gap-2 animate-slide-in">
      <div className="avatar-container flex flex-col items-center self-start gap-1.5 shrink-0 w-10">
        <div
          className="w-[42px] h-[42px] rounded-full shrink-0 overflow-hidden relative border border-black/10 shadow-md bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: "url('/images/face2.jpeg')" }}
          onClick={onAvatarClick}
        />
      </div>
      <div className="message relative py-3 px-4 rounded-2xl rounded-bl-sm max-w-[85%] bg-white text-gray-900 border border-black/10 shadow-card">
        {children}
      </div>
    </div>
  )
}
