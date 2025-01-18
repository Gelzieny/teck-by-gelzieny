type TechBadgeProps = {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="mr-2 mt-4 rounded bg-main-color px-2 py-1 text-sm font-medium text-white transition-colors">
      {name}
    </span>
  )
}
