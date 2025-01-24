import NextLink from 'next/link'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type LinkProps = ComponentProps<typeof NextLink>

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2  text-sm  transition-colors ',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
