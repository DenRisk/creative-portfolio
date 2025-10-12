import { IconIds } from './icon'

export type Contact = {
  email: string
  social: {
    id: IconIds
    url: string
  }[]
}
