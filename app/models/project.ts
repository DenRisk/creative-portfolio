import { IconIds } from '@/app/models/icons'

export type Project = {
  siteUrl: string,
  codeUrl?: string
  title: string
  description: string[]
  image: { src: string; alt: string }
  techIcons: (IconIds | 'separator')[];
  techFilter: ProjectFilterCodes[]
}

export type ProjectFilterCodes = 'all' | 'javascript' | 'typescript' | 'react' | 'angular' | 'tailwind' |'scss'

export type ProjectFilter = {
  code: ProjectFilterCodes
  label: string;
}
