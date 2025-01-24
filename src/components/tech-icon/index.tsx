import Image from 'next/image'

type TechIconProps = {
  imgSrc: string
  label: string
  className?: string
}

export function TechIcon({ imgSrc, label }: TechIconProps) {
  console.log(imgSrc)
  return (
    <div className="flex items-center gap-3 border-2 dark:border-main-color border-main-color rounded-2xl p-3 dark:hover:bg-main-color/50 hover:bg-slate-700/10 transition-colors group">
      <Image
        src={imgSrc}
        alt={label}
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  )
}
