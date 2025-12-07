import React, { useState } from 'react'
import Tag from './Tag'
import TechStack from './TechStack'
import ImageGallery from './ImageGallery'
import { MapIcon, GamepadIcon, GithubIcon } from './Icons'

const iconMap = {
  map: MapIcon,
  gamepad: GamepadIcon,
}

export default function ProjectCard({ project, onImageClick }) {
  const IconComponent = iconMap[project.icon] || MapIcon

  return (
    <div className="project-card bg-white/90 border border-black/10 rounded-xl p-5 mb-4 shadow-card">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 프로젝트 정보 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-3">
            <div className="mr-3 text-primary">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h6 className="m-0 text-primary text-lg font-semibold">{project.name}</h6>
              <span className="text-gray-500 text-sm">{project.subtitle} ({project.period})</span>
            </div>
          </div>

          <p className="m-0 mb-3 text-gray-500 text-sm leading-relaxed">{project.description}</p>

          <ul className="m-0 mb-3 text-gray-600 text-sm leading-relaxed list-none pl-0">
            {project.tasks.map((task, index) => (
              <li key={index} className="relative pl-5 mb-1 before:content-['▪️'] before:absolute before:left-0 before:text-purple-700">
                {task}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>

          <TechStack items={project.techStack} />

          {project.githubUrl && (
            <div className="mt-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary text-sm no-underline hover:underline"
              >
                <GithubIcon className="w-4 h-4 mr-1" />
                GitHub 저장소
              </a>
            </div>
          )}
        </div>

        {/* 이미지 갤러리 */}
        {project.images && project.images.length > 0 && (
          <div className="image-gallery lg:w-72 flex-shrink-0">
            <ImageGallery images={project.images} alt={project.name} onImageClick={onImageClick} />
          </div>
        )}
      </div>
    </div>
  )
}
