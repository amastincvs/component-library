import {
  Header,
  HeaderThemeToggle,
  Table,
  TableRow,
  TableHeader,
  TableHead,
  Input
} from '~/components'
import { IconClock } from '@tabler/icons-react'
import { ComponentProps } from 'react'

function TimePicker(props: ComponentProps<typeof Input>) {
  return (
    <Input
      {...props}
      icon={<IconClock />}
      type="time"
      required
      disabled
    />
  )
}

export default function Playground() {
  return (
    <div className="flex flex-col">
      <Header name="Component Library Playground" />
      <div className="h-full w-full">
        <TimePicker />
      </div>
    </div>
  )
}
