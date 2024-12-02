import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from '@mui/material/Link';
import { Box, Container } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { useLocation, useNavigate } from 'react-router-dom';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));




export default function BasicBreadcrumbs() {
  const location = useLocation();

  const navigate = useNavigate();
  const handleRedirect = () =>{
    navigate('/') //Redirect to work page
  }

  // Map routes to breadcrumb titles
  const routeTitles = {
    '/': 'Home',
    '/about': 'About Us',
    '/works': 'Works',
    '/contacts': 'Contact',
  };

  // Find the current route's title
  const breadcrumbTitle = routeTitles[location.pathname] || 'Page Not Found';




  return (
    <div role="presentation" 
    //onClick={handleClick}
    >
     <Box component="main">
      <Container  maxWidth={true} disableGutters>
        <Grid
          container-fluid
          spacing={2}
          sx={{
           pt: { xs: "4rem", sm: "5rem", md: "3rem" }, // Responsive font sizes
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Breadcrumbs aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/">
        <Typography variant="h6"
            className='logo_text'
            sx={{ flexGrow: 1,my: 2,textAlign: 'start',pl:2,color:'#fff',px:'0' }}>
           Web <span style={{color:'#C778DD',fontWeight:'bold'}}>Designer</span>
        </Typography>
        </Link> */}
        <Link
          underline="hover"
          color="white"
          onclick={handleRedirect}
          style={{cursor:'pointer'}}
        >
          Home
        </Link>
        <Typography sx={{ color: '#C778DD' }}>{breadcrumbTitle}</Typography>
      </Breadcrumbs>
            </Item>

</Grid>
</Grid>
</Container>
</Box>

      
    </div>
  );
}