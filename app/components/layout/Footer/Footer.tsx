import React from 'react'
import Icon from '@/app/components/ui/Icon'
import { contact, legalInformationNav } from '@/app/data/data'
import Link from 'next/link'

function Footer() {
  return (
    <footer id="contact" className="page-container pt-20 pb-28 footer-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <h4>Contact</h4>
          <p>{contact.email}</p>
          <div className="flex gap-4">
            {contact.social.map(social => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon id={social.id} pointer={true} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4>Legal information</h4>
          {legalInformationNav.items.map(item => (
            <Link href={item.url} key={item.title}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4>Creation</h4>
          <div>
            <p>Built with Next.js & Tailwind CSS</p>
            <p>Design in Figma</p>
            <p>Illustrations in Blender</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
