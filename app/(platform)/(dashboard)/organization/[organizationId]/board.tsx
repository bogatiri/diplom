import { deleteBoard } from '@/actions/delete-boars'
import { Button } from '@/components/ui/button'
import FormDelete from './form-delete'

interface BoardProps {
  title: string
  id: string
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithID = deleteBoard.bind(null, id)
  return (
    <form
      className="flex items-center gap-x-2"
      action={deleteBoardWithID}
    >
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  )
}

export default Board
