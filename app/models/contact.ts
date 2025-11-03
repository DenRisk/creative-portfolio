import { IconIds } from '@/app/models/icons'

export type Contact = {
  email: string
  social: {
    id: IconIds
    url: string
  }[]
}
