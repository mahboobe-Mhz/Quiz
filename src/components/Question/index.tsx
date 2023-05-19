import { Box, Button, Typography } from "@mui/material";
import AnswerList from "../answerList";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSelected,
  nextQuestion,
  openModal,
  QuizData,
} from "../../Redux/slices/quiz.slice";
import KeepMountedModal from "../../modal";
import LinearColor from "../showLoading";
import { useEffect } from "react";
let showCorrect=0
function Question() {
  const dispatch = useDispatch();
  const QuizState = useSelector(QuizData);
  const goNextQuestion = () => {
    if (QuizState.page + 1 < QuizState.data.length) {
      dispatch(nextQuestion());
      // dispatch(checkSelected({
      //   dataSelected:false
      // }))
    } else if(QuizState.page + 1 === QuizState.data.length) {
      dispatch(openModal({ modal: true }));
    }
  };


  
  useEffect(()=>{
    showCorrect=QuizState.correctAnswer
  },[QuizState.page])
  return (
    <>
      {QuizState.data ? (
        <Box
          sx={{
            backgroundColor: "primary.main",
            paddingX: 2,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            width: "500px",
            padding: "0.5rem",
            "@media (min-width:600px)": {
              padding: "1rem",
            },
            "@media (min-width:960px)": {
              padding: "2rem",
            },
          }}
        >
          <span className="text-green-800 font-bold text-right ">
            {" "}
            correct Answer {showCorrect}/{QuizState.data.length}
          </span>
          <Typography>
            <span>{QuizState.page + 1} -</span>{" "}
            {QuizState.data[QuizState.page].question}
          </Typography>
          <Box>
            <KeepMountedModal />
            <AnswerList
              answer1={QuizState.data[QuizState.page].incorrect_answers[0]}
              answer2={QuizState.data[QuizState.page].correct_answer}
              answer3={QuizState.data[QuizState.page].incorrect_answers[1]}
              answer4={QuizState.data[QuizState.page].incorrect_answers[2]}
            />
          </Box>
          <Button
            color="secondary"
            onClick={() => goNextQuestion()}
            type="submit"
            variant="contained"
          >
            {" "}
            Next Question
          </Button>
        </Box>
      ) : (
        <LinearColor />
      )}
    </>
  );
}

export default Question;
