
import { createTheme } from '@mui/material/styles';
import {colors} from '@mui/material'

export const Theme= createTheme({
    palette:{
        primary:{
            main:colors.grey[100]
        },
        secondary:{
            main:colors.orange[500],
            light:colors.lightBlue[50]
        }
    },
    typography:{
        fontFamily:"dana",
        fontSize:20
    }
})
    


