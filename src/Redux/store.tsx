import { configureStore } from "@reduxjs/toolkit"
import  QuizSlice  from "./slices/quiz.slice"

export const store = configureStore ({
  reducer: {
    QuizState: QuizSlice
  },
})
export default store

console.log(store.getState())
