import Image from 'next/image'
import { getRelativeTimeString } from '../../../../../utils/get-relative-time'

type KnowledgeSectionProps = {
  imgSrc: string
  label: string
  starDate: string
}

export function KnowTech({ imgSrc, label, starDate }: KnowledgeSectionProps) {
  const relativeDate = getRelativeTimeString(new Date(starDate), 'pt-Br')
    .replace('há', '')
    .replace('em', '')

  return (
    <div className="flex items-center gap-8 border-2 border-main-color py-4 px-2 rounded-2xl group">
      <div>
        <Image
          src={imgSrc}
          alt={label}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-lg font-medium group-hover:text-blue-500 transition-all">
          {label}
        </p>
        <p className="text-color-text text-sm dark:text-gray-600 group-hover:text-gray-400 transition-all">
          {relativeDate} de experiência
        </p>
      </div>
    </div>
  )
}
