import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-1 px-4 py-2 bg-main-color rounded-xl text-white-color tracking-widest font-semibold border border-transparent ease-in duration-300 hover:bg-transparent hover:text-main-color hover:border-main-color',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
