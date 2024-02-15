'use client'

import { useTheme } from 'next-themes'
import { Toaster, toast } from 'sonner'
import React from 'react'

type ToasterProps = React.ComponentProps<typeof Toaster>

const Sonner = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()

  return (
    <Toaster
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:border-border group-[.toaster]:shadow-lg font-sans p-4 gap-3 rounded-md border bg-background grid grid-cols-[auto,1fr] shadow-2xl [&>div[data-icon]]:mx-0 [&>div[data-icon]]:mt-1 min-[600px]:min-w-[364px]',
          description:
            'group-[.toast]:text-muted-foreground text-sm !text-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          title: 'font-medium',
          error: 'text-rose-600',
          info: 'text-blue-600',
          success: 'text-emerald-600',
          warning: 'text-amber-600'
        }
      }}
      {...props}
    />
  )
}

export { Sonner, toast as sonnerToast }
