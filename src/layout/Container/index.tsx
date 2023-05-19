import Container from '@mui/material/Container';
import StepUp from '../../components/StepUp';
import { ThemeProvider } from '@mui/material';
import { Theme } from '../../components/Themes/CustomThemes';
import Question from '../../components/Question';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from '../../notFound';

const router =createBrowserRouter([
  {
  path :"/",
  element:<StepUp/>,
  errorElement:<NotFound/>
},  {
  path :"/Question",
  element:<Question/>
}

])
function ContainerBox() {
  return (
<Container   sx={{display:"flex", justifyContent:"center",alignItems:"center",height:"100%",width:1}}>
    <ThemeProvider theme={Theme}>
<RouterProvider router={router}/>

    </ThemeProvider>


</Container>
  )
}

export default ContainerBox