import { Paper, Typography, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SelectOP from "../Select";
import { Controller, useForm } from "react-hook-form";
import { FormDataType } from "../interface";
import { useDispatch, useSelector } from "react-redux";
import { QuizData, apiData, nextQuestion, saveData } from "../../Redux/slices/quiz.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../Schema";

const Category = [
  {
    value: "",
    label: "Category",
  },
  {
    value: 25,
    label: "Art",
  },
  {
    value: 24,
    label: "politics",
  },
  {
    value: 27,
    label: "Animals",
  },

  {
    value: 21,
    label: "Sport",
  },
  {
    value: 26,
    label: "celebrities",
  },
];
const Difficulty = [
  {
    value: "",
    label: "Difficulty",
  },
  {
    value: "easy",
    label: "easy",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "hard",
    label: "hard",
  },
];

function StepUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const QuizState = useSelector(QuizData);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      number: 0,
      Category: "",
      Difficulty: "",
    },
    mode: "onChange",
  });

  const onSubmit =  (data: any) => {
    const url=`https://opentdb.com/api.php?amount=${data.number}&category=${data.Category}&difficulty=${data.Difficulty}&token=c79642dab104926cc0d1b6dd181150d00f140efe8b5d042ca2d292c4ce608dca`


    axios.get(url).then((res) =>
      dispatch(
        apiData({
          data: res.data.results,
        })
      )
    );
    navigate("/Question");

  }

const startQuestion =()=>{
  dispatch(nextQuestion())
}
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      elevation={0}
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
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          "@media (min-width:600px)": {
            fontSize: "2rem",
          },
        }}
        component="h1"
      >
        Setup Quiz
      </Typography>

      <Box>
        <Typography sx={{ paddingBottom: "10px" }} variant="body1">
          Number Of Questions
        </Typography>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <TextField
      
              type="number"
              {...field}
              {...register("number", { required: true })}
              error={errors.number ? true : false}
              {...register("number")}
              helperText={errors["number"]?.message}
              sx={{ width: "100%", backgroundColor: "secondary.light" }}
            />
          )}
        />
      </Box>

      <SelectOP
        register={register}
        control={control}
        showError="select Category "
        select1="Category"
        errors1={errors}
        data={Category}
        label="Category"
      />

      <SelectOP
        control={control}
        register={register}
        select1="Difficulty"
        errors1={errors}
        showError="select Difficulty "
        data={Difficulty}
        label="Difficulty"
      />
      <Button
        sx={{ width: "100%" }}
        color="secondary"
        type="submit"
        variant="contained"
        onClick={()=>startQuestion()}
      >
        Start
      </Button>
    </Paper>
  );
}

export default StepUp;
