import React from 'react'
import { Question, Answer } from '../common/ChatBubble'
import InfoCard from '../common/InfoCard'
import ExperienceCard from '../common/ExperienceCard'
import { companies } from '../../data/portfolio'
import { ClockIcon, BuildingIcon, ReceiptIcon } from '../common/Icons'

function CompanySection({ company }) {
  return (
    <div className="mb-10">
      {/* 회사명 */}
      <h4 className="company-name text-lg font-bold my-4 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-gradient-to-br before:from-green-600 before:to-green-400 before:rounded-sm">
        <span className="bg-gradient-to-br from-green-600 to-green-400 bg-clip-text text-transparent">
          {company.name}
        </span>
        {company.isCurrent && (
          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            재직중
          </span>
        )}
      </h4>

      {/* 회사 정보 카드 */}
      <div className="info-card-grid grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
        <InfoCard
          icon={<ClockIcon className="w-5 h-5 text-primary" />}
          label="근무 기간"
          value={company.period}
        />
        {company.size && (
          <InfoCard
            icon={<BuildingIcon className="w-5 h-5 text-primary" />}
            label="회사 규모"
            value={company.size}
            valueExtra={company.funding}
          />
        )}
        {company.mainWork && company.mainWork.length > 0 && (
          <InfoCard
            icon={<ReceiptIcon className="w-5 h-5 text-primary" />}
            label="주요 업무"
            value={company.mainWork[0]}
            valueExtra={company.mainWork[1]}
          />
        )}
      </div>

      {/* 경험 그룹 (프로젝트들) */}
      {company.experienceGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          <h5 className="text-black mb-4 text-lg font-semibold">{group.title}</h5>
          <p className="mb-5 text-gray-500 text-[15px] leading-relaxed">{group.description}</p>
          {group.projects.map((project, projectIndex) => (
            <ExperienceCard key={projectIndex} project={project} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function ExperienceSection({ onAvatarClick }) {
  return (
    <div className="chat-section mb-32 scroll-mt-8" id="experience">
      <Question>어떤 경력이 있으신가요?</Question>

      <Answer onAvatarClick={onAvatarClick}>
        <h3 className="m-0 mb-4 text-xl font-semibold text-gray-900 pb-1.5 border-b-2 border-black/10">경력</h3>

        {companies.map((company) => (
          <CompanySection key={company.id} company={company} />
        ))}
      </Answer>
    </div>
  )
}
