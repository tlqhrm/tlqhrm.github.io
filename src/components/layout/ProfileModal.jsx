import React from 'react'
import { profile } from '../../data/portfolio'
import { MailIcon, GithubIcon } from '../common/Icons'

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw] bg-white rounded-xl shadow-modal overflow-hidden animate-modal-in">
        {/* Header */}
        <div className="text-center py-6 px-5 bg-gradient-to-br from-[#2481cc] to-[#3498db]">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <img
              src="/images/face2.jpeg"
              alt="프로필"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-0.5 right-0.5 w-5 h-5 bg-green-500 rounded-full border-[3px] border-white" />
          </div>
          <h3 className="m-0 mb-1 text-xl font-semibold text-white">{profile.name}</h3>
          <p className="m-0 mb-0.5 text-sm text-white/90">{profile.title}</p>
          <p className="m-0 text-sm text-white/80">{profile.experience}</p>
        </div>

        {/* Info */}
        <div className="py-2 border-t border-b border-gray-200">
          <div className="flex items-center py-3 px-4 min-h-[52px]">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3 text-gray-500">
              <MailIcon />
            </div>
            <div className="flex-1">
              <div className="text-sm text-[#2481cc] font-medium mb-0.5">이메일</div>
              <div className="text-base text-black">{profile.email}</div>
            </div>
          </div>
          <div className="flex items-center py-3 px-4 min-h-[52px]">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3 text-gray-500">
              <GithubIcon />
            </div>
            <div className="flex-1">
              <div className="text-sm text-[#2481cc] font-medium mb-0.5">GitHub</div>
              <div className="text-base text-black">{profile.github}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex p-2 gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex-1 flex flex-col items-center py-3 px-2 bg-gray-100 rounded-lg no-underline text-gray-500 transition-colors hover:bg-gray-200 min-h-[64px] justify-center"
          >
            <MailIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">이메일</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center py-3 px-2 bg-gray-100 rounded-lg no-underline text-gray-500 transition-colors hover:bg-gray-200 min-h-[64px] justify-center"
          >
            <GithubIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">GitHub</span>
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-4 bg-white text-[#2481cc] border-none border-t border-gray-200 text-base font-medium cursor-pointer transition-colors hover:bg-gray-100"
        >
          닫기
        </button>
      </div>
    </div>
  )
}
