import { createSlice } from "@reduxjs/toolkit"
const initialState ={
    urlData:"",
    page:-1,
    correctAnswer:0,
    data:"",
    modal:false,
    dataSelected:false
}
export const QuizSlice = createSlice({
            name:"Quiz",
            initialState,
            reducers:{
                saveData: (state, action)=>{
                    state.urlData=action.payload.urlData
                },
                nextQuestion:(state ) =>{
                    state.page +=1
                },
                apiData:(state, action)=>{
                    state.data=action.payload.data
                },
                plusCorrectAnswer:(state) =>{
                    state.correctAnswer += 1
                },
                openModal:(state, action) =>{
                    state.modal= action.payload.modal
                },
                resetQuiz:(state) =>{
                    state.page=-1
                    state.correctAnswer=0
                    state.data=""
                },
                checkSelected:(state,action)=>{
                    state.dataSelected=action.payload
                }
            }
})
export const {saveData ,nextQuestion,apiData,plusCorrectAnswer,openModal,resetQuiz,checkSelected}=QuizSlice.actions

export const QuizData=(state:any)=> state.QuizState


export default QuizSlice.reducer