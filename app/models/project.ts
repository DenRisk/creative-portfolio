import { IconIds } from './icon'

export type Project = {
  url: string
  title: string
  description: string[]
  image: { src: string; alt: string }
  technologies: IconIds[]
}
