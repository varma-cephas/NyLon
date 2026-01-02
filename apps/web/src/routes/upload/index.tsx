import { createFileRoute } from '@tanstack/react-router'
import DragDrop from '@/components/ui/DragDrop'

export const Route = createFileRoute('/upload/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <DragDrop />
    </>
  )
}
