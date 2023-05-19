import { Provider } from "react-redux"
import ContainerBox from "./layout/Container"
import { store } from "./Redux/store"

import {RouterProvider } from "react-router-dom"


function App() {
  return (
   
    <Provider store={store}>
   <ContainerBox/>

  </Provider>

  )
}

export default App