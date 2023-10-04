import * as React from 'react'

import { cn } from '../../lib/utils'
import { type ReactNode } from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { icon?: ReactNode }
>(({ className, type, ...props }, ref) => {
  return (
    <div
      className={cn(
        props.icon
          ? 'flex items-center [&>svg]:absolute [&>svg]:left-9'
          : undefined
      )}
    >
      {props.icon ?? null}
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
          props.icon ? 'pl-9 pr-3' : 'px-3'
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
