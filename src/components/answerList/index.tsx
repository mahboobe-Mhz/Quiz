import { useEffect, useRef, useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { ListItemButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSelected,
  nextQuestion,
  plusCorrectAnswer,
  QuizData,
} from "../../Redux/slices/quiz.slice";
interface Props {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const AnswerList = ({ answer1, answer2, answer3, answer4 }: Props) => {
  const strings = [answer1, answer2, answer3, answer4];
console.log(answer2);

  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();
  const QuizState = useSelector(QuizData);
  const [data, setData] = useState([]);
  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  useEffect(()=>{
    setData(shuffleArray(strings).slice(0, 4)) 
  },[QuizState.page])
  const handleListItemClick = (event: any, index: any) => {
    if (QuizState.data[QuizState.page].correct_answer === event) {
      dispatch(plusCorrectAnswer());
    }
  //   dispatch(checkSelected({
  //    dataSelected:true
  //   }))
 };


  return (
    <List component="nav">
      <ListItemButton
        selected={selected === 0}
        onClick={() => handleListItemClick(data[0], 0)}
      >
        <ListItemText primary={data[0]} />
      </ListItemButton>
      <ListItemButton
        selected={selected === 1}
        onClick={() => handleListItemClick(data[1], 1)}
      >
        <ListItemText primary={data[1]} />
      </ListItemButton>
      <ListItemButton
        selected={selected === 2}
        onClick={() => handleListItemClick(data[2], 2)}
      >
        <ListItemText primary={data[2]} />
      </ListItemButton>
      <ListItemButton
        selected={selected === 3}
        onClick={() => handleListItemClick(data[3], 3)}
      >
        <ListItemText primary={data[3]} />
      </ListItemButton>
    </List>
  );
};

export default AnswerList;
