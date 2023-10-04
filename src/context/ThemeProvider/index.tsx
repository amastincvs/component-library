'use client'

import { createContext, type ReactNode, useEffect, useState } from 'react'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: string
  storageKey: string
}

type ThemeProviderState = {
  theme: string
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: string) => void
}

const initialState = {
  theme: 'light',
  setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

function ThemeProvider({
  children,
  defaultTheme = 'light',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem(props.storageKey) || defaultTheme
      : defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(props.storageKey, theme)
        setTheme(theme)
      }
    }
  }

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProvider, ThemeProviderContext, type ThemeProviderProps }
