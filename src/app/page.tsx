import { Header, HeaderThemeToggle } from '~/components'

export default function Playground() {
  return (
    <div className="flex flex-col">
      <Header name="Component Library Playground">
        <HeaderThemeToggle />
      </Header>
      <div className="h-full w-full">Your code here.</div>
    </div>
  )
}
