import React from 'react'
import { Question, Answer } from '../common/ChatBubble'
import CertificationCard from '../common/CertificationCard'
import { certifications } from '../../data/portfolio'

export default function CertificationsSection({ onAvatarClick }) {
  return (
    <div className="chat-section mb-32 scroll-mt-8" id="certifications">
      <Question>어떤 자격증을 보유하고 계신가요?</Question>

      <Answer onAvatarClick={onAvatarClick}>
        <h3 className="m-0 mb-4 text-xl font-semibold text-gray-900 pb-1.5 border-b-2 border-black/10">자격증</h3>

        {/* DevOps */}
        <div className="mb-6">
          <h5 className="text-black mb-4 text-lg font-semibold">DevOps</h5>
          {certifications.devops.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>

        {/* 국내 자격증 */}
        <div className="mb-6">
          <h5 className="text-black mb-4 text-lg font-semibold">국내 자격증</h5>
          {certifications.domestic.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </Answer>
    </div>
  )
}
