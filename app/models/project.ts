import { IconIds } from './icon'

export type Project = {
  siteUrl: string,
  codeUrl?: string
  title: string
  description: string[]
  image: { src: string; alt: string }
  technologies: (IconIds | 'separator')[];
}
