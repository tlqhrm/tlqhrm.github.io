import React from 'react'
import Tag from './Tag'
import TechStack from './TechStack'
import { VideoIcon, MonitorIcon, SmartphoneIcon, LiveIcon, ChatIcon } from './Icons'

const iconMap = {
  video: VideoIcon,
  monitor: MonitorIcon,
  smartphone: SmartphoneIcon,
  live: LiveIcon,
  chat: ChatIcon,
}

export default function ExperienceCard({ project }) {
  const IconComponent = iconMap[project.icon] || VideoIcon

  return (
    <div className="experience-card bg-white/90 border border-black/10 rounded-xl p-5 mb-4 shadow-card">
      <div className="flex items-center mb-3">
        <div className="mr-3 text-primary">
          <IconComponent />
        </div>
        <div>
          <h6 className="m-0 text-primary text-lg font-semibold">{project.name}</h6>
          <span className="text-gray-500 text-sm">{project.subtitle} ({project.period})</span>
        </div>
      </div>

      <ul className="m-0 mb-3 text-gray-600 text-sm leading-relaxed list-none pl-0">
        {project.tasks.map((task, index) => (
          <li key={index} className="relative pl-5 mb-1 before:content-['▪️'] before:absolute before:left-0 before:text-purple-700">
            {task}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>

      <TechStack items={project.techStack} />
    </div>
  )
}
