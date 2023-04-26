import { StaticImageData } from 'next/image';
import { ElementType } from 'react'

export interface SignPageTemplateConfig {
   text: string;
   linkText: string;
   linkUrl: string;
   image: StaticImageData;
}

export interface SignPageTemplateProps {
   config: SignPageTemplateConfig;
   Form: ElementType;
}
