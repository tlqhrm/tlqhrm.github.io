import React from 'react'
import { Question, Answer } from '../common/ChatBubble'
import InfoCard from '../common/InfoCard'
import { profile, introText } from '../../data/portfolio'
import {
  UserIcon,
  CodeIcon,
  ClockIcon,
  MailIcon,
  GithubIcon,
  GraduationIcon
} from '../common/Icons'

export default function IntroSection({ onAvatarClick }) {
  return (
    <div className="chat-section mb-32 scroll-mt-8" id="intro">
      <Question>안녕하세요. 자기소개 부탁드립니다.</Question>

      <Answer onAvatarClick={onAvatarClick}>
        <h3 className="m-0 mb-4 text-xl font-semibold text-gray-900 pb-1.5 border-b-2 border-black/10">자기소개</h3>

        {/* 기본 정보 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <InfoCard
            icon={<UserIcon className="w-5 h-5 text-primary" />}
            label="이름"
            value={profile.name}
          />
          <InfoCard
            icon={<CodeIcon className="w-5 h-5 text-primary" />}
            label="직무"
            value={profile.title}
          />
          <InfoCard
            icon={<ClockIcon className="w-5 h-5 text-primary" />}
            label="경력"
            value={profile.experience}
          />
          <InfoCard
            icon={<MailIcon className="w-5 h-5 text-primary" />}
            label="이메일"
            value={profile.email}
          />
          <InfoCard
            icon={<GithubIcon className="w-5 h-5 text-primary" />}
            label="GitHub"
            value={
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline hover:text-primary"
              >
                {profile.github}
              </a>
            }
          />
          <InfoCard
            icon={<GraduationIcon className="w-5 h-5 text-primary" />}
            label="학력"
            value={profile.education.school}
            valueExtra={`(${profile.education.period})`}
          />
        </div>

        {/* 자기소개 텍스트 */}
        <div className="bg-white/95 border border-black/10 rounded-xl p-6 my-5 shadow-card">
          <h4 className="m-0 mb-5 text-primary text-lg font-semibold tracking-tight">
            {introText.greeting}
          </h4>
          <p className="m-0 mb-6 text-gray-700 text-base leading-7 font-medium tracking-tight">
            {introText.main}
          </p>
          <div className="border-b border-primary/15 my-5" />
          {introText.paragraphs.map((paragraph, index) => (
            <p key={index} className="m-0 mb-4 last:mb-0 text-gray-500 text-[15px] leading-7 tracking-tight">
              {paragraph}
            </p>
          ))}
        </div>
      </Answer>
    </div>
  )
}
