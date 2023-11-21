import { Header, Input } from '~/components'

export default function Playground() {
  return (
    <div className="flex flex-col">
      <Header name="Component Library Playground" />
      <div className="h-full w-full">
        <Input />
      </div>
    </div>
  )
}
