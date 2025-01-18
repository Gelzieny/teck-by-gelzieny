import { cn } from '../../lib/utils'

type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="text-main-hover-color text-sm text-color-text dark:text-color-bg">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium text-main-color">{title}</h3>
    </div>
  )
}
