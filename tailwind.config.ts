import { type Config } from 'tailwindcss'
import { cvs, shadcn } from '../cvs-marketing-tech/packages/tailwind-config'

export default {
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './index.html',
    './public/index.html'
  ],
  presets: [cvs, shadcn]
} satisfies Config
