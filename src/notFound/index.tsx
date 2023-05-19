
import { Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";



function NotFound() {
  return (
    <Box
      sx={{
        width:1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
  
       
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained">
       <Link to={"/"}>Back Home</Link> 
       </Button>
    </Box>
  );
}

export default NotFound