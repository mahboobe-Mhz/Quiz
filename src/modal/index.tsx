import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, resetQuiz,QuizData } from '../Redux/slices/quiz.slice';
import { blue, red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: blue[300],
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:blue[50],

};

export default function KeepMountedModal() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const QuizState = useSelector(QuizData)
  const handleClose = () =>{dispatch(openModal({modal:false}))
  navigate("/")
  dispatch(resetQuiz())
 } 
  const correctAnswer =(QuizState.correctAnswer/QuizState.data.length)*100

  return (
    <div>
   
      <Modal
        keepMounted
        open={QuizState.modal}
        // onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box sx={{textAlign:"center", width:"100%"}}>
          <Typography sx={{
     
          }} id="keep-mounted-modal-title" variant="h4" component="h2">
            Congrats
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 , mb:3}}>
          you answered  { parseInt(correctAnswer)}%
          </Typography>
          <Button 
          color='secondary'
          onClick={()=>handleClose()}
          sx={{color:blue[900], fontSize:"20px"}}
           variant="contained" > play again</Button>
           </Box>
        </Box>
  
      </Modal>
    </div>
  );
}