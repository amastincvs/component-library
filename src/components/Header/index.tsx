import * as React from 'react'
import { type ComponentProps, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../index'
import { IconMoonStars, IconSunFilled } from '@tabler/icons-react'

interface Props {
  name?: string
}

function CVSHealthLogo() {
  return (
    <svg
      aria-label="CVS Health logo"
      version="1.2"
      baseProfile="tiny"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 606.67 100.67"
      overflow="visible"
      height={32}
    >
      <g>
        <path
          className="dark:fill-white"
          d="M461.84,87.85h14.02v-6.19h-6.37V46.88h6.37v-6.19h-14.02v7.01c-4.01-5.19-10.01-8.38-17.12-8.38
  c-13.38,0-23.3,10.74-23.3,24.94c0,14.2,9.92,24.95,23.3,24.95c7.1,0,13.11-3.19,17.12-8.38V87.85z M414.77,75.2h-7.65
  c-2.73,4.73-7.65,7.65-14.66,7.65c-10.65,0-16.39-6.47-17.12-16.02h40.51v-3.37c0-14.38-9.19-24.12-23.67-24.12
  c-14.57,0-24.67,10.29-24.67,24.94c0,14.75,10.1,24.95,24.67,24.95C402.85,89.22,411.04,83.85,414.77,75.2 M315.36,48.07V25.95
  h6.83v-6.37h-21.58v6.37h6.83v55.53h-6.83v6.37h21.58v-6.37h-6.83V54.26h34.23v27.22h-6.83v6.37h21.58v-6.37h-6.83V25.95h6.83
  v-6.37h-21.58v6.37h6.83v22.12H315.36z M549.69,81.66h-6.37V60.54c0-9.83,5.01-14.75,13.84-14.75c7.92,0,13.02,4.92,13.02,14.75
  v21.12h-6.37v6.19h20.39v-6.19h-6.37V60.54c0-11.74-7.01-21.21-19.75-21.21c-6.65,0-11.56,2.55-14.75,6.65v-26.4H529.3v6.19h6.37
  v55.9h-6.37v6.19h20.39V81.66z M429.25,64.27c0-10.74,6.83-18.48,16.48-18.48c9.74,0,16.38,7.92,16.38,18.48
  c0,10.56-6.64,18.48-16.38,18.48C436.08,82.75,429.25,75.02,429.25,64.27 M392.2,45.7c10.01,0,15.2,7.1,16.02,15.02h-32.86
  C376.27,52.07,382.09,45.7,392.2,45.7 M515.46,75.65V46.88h9.56v-6.19h-9.56V28.68h-7.65v12.02h-7.28v6.19h7.28v29.13
  c0,8.38,3.73,12.47,12.56,12.47c1.37,0,3.55-0.27,4.64-0.64v-6.19c-1.46,0.27-2.73,0.36-3.91,0.36
  C517.28,82.03,515.46,80.66,515.46,75.65 M496.53,88.49c1.28,0,3.28-0.27,4.28-0.64v-6.19c-1.27,0.27-2.37,0.36-3.37,0.36
  c-3.28,0-4.83-1.73-4.83-6.83V19.57h-14.02v6.19h6.37v49.8C484.96,84.03,488.33,88.49,496.53,88.49"
        />
        <path
          fill="#CC0000"
          d="M254.73,66.46c1.09,5.1,4.01,6.92,10.01,6.92c5.28,0,8.19-1.91,8.19-4.92c0-4.28-3.91-4.64-12.02-6.74
  c-9.47-2.46-15.57-4.55-18.39-6.56c-5.28-3.73-7.83-9.01-7.83-15.75c0-13.2,10.38-21.76,28.49-21.76
  c17.57,0,27.95,7.74,29.13,21.48h-20.67c-0.73-4.1-3.55-6.01-8.83-6.01c-4.64,0-6.92,1.55-6.92,4.64c0,3.64,3.55,4.28,10.1,6.01
  c8.47,2.19,15.2,3.55,19.48,6.46c6.01,4.01,8.74,8.92,8.74,15.93c0,14.84-10.65,23.49-30.41,23.49c-18.3,0-29.04-8.65-30.41-23.21
  H254.73z M174.35,61.27c-1.18,17.93-13.02,28.4-32.59,28.4c-21.76,0-35.05-13.84-35.05-35.96c0-22.3,13.38-36.05,34.59-36.05
  c19.75,0,31.41,10.01,32.68,27.68h-20.85c-0.64-6.92-4.55-10.56-11.56-10.56c-8.56,0-12.84,6.28-12.84,18.94
  c0,12.38,4.64,18.84,13.47,18.84c6.65,0,10.83-4.01,11.47-11.29H174.35z M169.7,19.57h22.3l11.47,44.06l12.29-44.06h21.48
  l-22.94,68.19h-21.76L169.7,19.57z M36.7,17.75c-2.59,0-5.17,0.99-7.14,2.97l-14.3,14.3c-3.94,3.94-3.94,10.35,0.01,14.3
  l40.35,40.36l40.35-40.36c3.95-3.95,3.94-10.35-0.01-14.3L81.68,20.73c-1.97-1.98-4.56-2.97-7.14-2.97c-2.59,0-5.19,1-7.17,2.99
  L55.62,32.49L43.86,20.73C41.88,18.75,39.29,17.75,36.7,17.75L36.7,17.75z"
        />
      </g>
      <g>
        <path
          className="dark:fill-white"
          d="M595.7,88.15c-4.03,0-6.89-3.01-6.89-7c0-4.21,3.18-7,6.89-7c3.67,0,6.85,2.79,6.85,7
		C602.55,85.36,599.37,88.15,595.7,88.15z M595.7,75.36c-3.03,0-5.39,2.38-5.39,5.79c0,3.18,2.06,5.79,5.39,5.79
		c3,0,5.35-2.36,5.35-5.79C601.05,77.74,598.69,75.36,595.7,75.36z M594.31,85.15h-1.27V77.4h2.94c1.87,0,2.83,0.66,2.83,2.23
		c0,1.4-0.86,1.98-2.02,2.12l2.17,3.41h-1.44l-2-3.31h-1.2V85.15z M595.73,80.75c0.96,0,1.8-0.09,1.8-1.22
		c0-0.94-0.92-1.05-1.68-1.05h-1.54v2.27H595.73z"
        />
      </g>
    </svg>
  )
}

function ApplicationName(props: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-px bg-border" />
      <span className="text-sm font-medium tracking-tight text-muted-foreground">
        {props.name}
      </span>
    </div>
  )
}

function Header(props: HTMLAttributes<HTMLDivElement> & Props) {
  return (
    <header
      {...props}
      className={cn(
        'relative z-20 flex items-center justify-between border-b bg-background p-6 shadow-sm',
        props.className
      )}
    >
      <div className="flex items-center gap-2">
        <CVSHealthLogo />
        {props.name ? <ApplicationName name={props.name} /> : null}
      </div>
      {props.children}
    </header>
  )
}

function HeaderThemeToggle(props: ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      aria-label="Toggle light/dark theme"
      variant="outline"
      size="icon"
      onClick={props.onClick}
    >
      <IconSunFilled
        aria-label="Click to switch to light mode"
        size={20}
        className="hidden dark:block"
      />
      <IconMoonStars
        aria-label="Click to switch to dark mode"
        size={20}
        className="dark:hidden"
      />
    </Button>
  )
}
HeaderThemeToggle.displayName = 'HeaderThemeToggle'

export { Header, HeaderThemeToggle }
