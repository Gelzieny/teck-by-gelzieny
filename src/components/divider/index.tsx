import { cn } from "../../lib/utils"

type DividerProps = {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        'w-full my-8 border-b border-b-gray-300 dark:border-b-gray-800',
        className
      )}
    />
  )
}
