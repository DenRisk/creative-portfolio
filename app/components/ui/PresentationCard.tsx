import React from 'react'
import { Presentation } from '@/app/models/presentation'

function PresentationCard({ title, content }: Presentation) {
  return (
    <div className="presentation-card card-bg">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default PresentationCard
