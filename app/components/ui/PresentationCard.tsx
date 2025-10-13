import React from 'react'
import { Presentation } from '@/app/models/presentation'

function PresentationCard({ title, content }: Presentation) {
  return (
    <div className="flex flex-col rounded-4xl p-12 stroke-1 border border-neutral-80 card-bg">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default PresentationCard
