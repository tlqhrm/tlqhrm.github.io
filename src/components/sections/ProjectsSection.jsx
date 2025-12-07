import React from 'react'
import { Question, Answer } from '../common/ChatBubble'
import ProjectCard from '../common/ProjectCard'
import { projects } from '../../data/portfolio'

export default function ProjectsSection({ onAvatarClick, onImageClick }) {
  return (
    <div className="chat-section mb-32 scroll-mt-8" id="projects">
      <Question>어떤 프로젝트들을 진행해보셨나요?</Question>

      <Answer onAvatarClick={onAvatarClick}>
        <h3 className="m-0 mb-4 text-xl font-semibold text-gray-900 pb-1.5 border-b-2 border-black/10">프로젝트</h3>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onImageClick={onImageClick} />
        ))}
      </Answer>
    </div>
  )
}
