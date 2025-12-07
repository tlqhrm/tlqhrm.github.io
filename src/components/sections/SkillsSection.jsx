import React from 'react'
import { Question, Answer } from '../common/ChatBubble'
import { skills } from '../../data/portfolio'
import { CodeIcon, DatabaseIcon, CloudIcon, BookIcon } from '../common/Icons'

function SkillCard({ icon, title, items }) {
  return (
    <div className="flex items-start p-4 bg-white/80 border border-black/10 rounded-xl shadow-card">
      <div className="mr-3 text-primary mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-primary font-semibold mb-2">{title}</div>
        <div className="leading-relaxed">
          {items.map((item, index) => (
            <div key={index}>• {item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SkillsSection({ onAvatarClick }) {
  return (
    <div className="chat-section mb-32 scroll-mt-8" id="skills-backend">
      <Question>기술 스택에 대해 알려주세요.</Question>

      <Answer onAvatarClick={onAvatarClick}>
        <h3 className="m-0 mb-4 text-xl font-semibold text-gray-900 pb-1.5 border-b-2 border-black/10">기술 스택</h3>

        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
            <SkillCard
              icon={<CodeIcon className="w-5 h-5" />}
              title="백엔드"
              items={skills.backend}
            />
            <SkillCard
              icon={<DatabaseIcon className="w-5 h-5" />}
              title="데이터베이스"
              items={skills.database}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillCard
              icon={<CloudIcon className="w-5 h-5" />}
              title="DevOps"
              items={skills.devops}
            />
            <SkillCard
              icon={<BookIcon className="w-5 h-5" />}
              title="프론트엔드"
              items={skills.frontend}
            />
          </div>
        </div>
      </Answer>
    </div>
  )
}
