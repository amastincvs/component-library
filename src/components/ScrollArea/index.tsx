'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '../../lib/utils'
import { cva } from 'class-variance-authority'

const scrollbarVariants = cva('flex touch-none select-none transition-colors', {
  variants: {
    orientation: {
      vertical: 'h-full border-l border-l-transparent p-[1px]',
      horizontal: 'h-2.5 border-t border-t-transparent p-[1px]'
    },
    size: {
      default: '',
      sm: ''
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'sm',
      class: 'h-[5px] border-t border-t-transparent p-[1px]'
    }
  ],
  defaultVariants: {
    orientation: 'vertical',
    size: 'default'
  }
})

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation?: 'horizontal' | 'vertical'
    size?: 'default' | 'sm'
  }
>(
  (
    {
      className,
      children,
      orientation = 'vertical',
      size = 'default',
      ...props
    },
    ref
  ) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit] [&>div]:h-full">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar
        orientation={orientation}
        size={size}
      />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & { size?: 'default' | 'sm' }
>(
  (
    { className, orientation = 'vertical', size = 'default', ...props },
    ref
  ) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(scrollbarVariants({ orientation, size, className }))}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          'relative flex-1 rounded-full bg-border dark:bg-stone-700',
          size === 'sm' && 'bg-muted-foreground/50'
        )}
        style={{ width: orientation === 'vertical' ? '7px' : undefined }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
)
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
