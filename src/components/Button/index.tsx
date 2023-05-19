import {Button} from '@mui/material'
interface Props{
    child:string
}
function AnswerButton({child}:Props) {
  return ( <Button>
{child}
  </Button>

  )
}

export default AnswerButton