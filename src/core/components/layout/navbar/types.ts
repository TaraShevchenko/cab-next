import { FC, SVGProps } from 'react'

export interface INavbarMenuItem {
   name: string
   url: string
   icon: FC<SVGProps<SVGSVGElement>>
}
