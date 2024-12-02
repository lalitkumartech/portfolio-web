import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

function Banner() {
  const navigate = useNavigate();
  const handleRedirect = ()=>{
    navigate('/contacts')
  }

  // Redirect to Github Account

  const handleGitHub = ()=>{
    window.open('https://github.com/lalitkumartech', "_blank")
  }

  const handleLingdin = ()=>{
    window.open('https://www.linkedin.com/in/lalit-kumar-34758a163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app');
  }

  return (
    <>
      <Box component="main">
        <Toolbar />
         <ul className="media_icon_row">
          <li>
            <img onClick={handleGitHub} src="/images/Github.png" className="media_left_icon" alt="media right icon" />
          </li>
          <li>
            <img onClick={handleLingdin} src="/images/Linkedin.png" className="media_left_icon" alt="media right icon"
             style={{top: "9rem"}}
             />
          </li>
         </ul>    
             
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              p: { xs: "0rem", sm: "2rem", md: "3rem" }, // Responsive font sizes
            }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_fist_row">
                  <Typography variant="h5">
                    Lalit kumar is a <span>web designer</span> and{" "}
                    <span>front-end developer</span>
                  </Typography>
                  <Typography>
                    He crafts responsive websites where technologies meet
                    creativity
                  </Typography>
                  <Button onClick={handleRedirect}>contact me!!</Button>
                </Box>
              </Item>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{
              p: { xs: "1rem", sm: "2rem", md: "4rem" }, // Responsive font sizes
            }}>
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_second_row">
                  <img style={{width:'100%'}} src="/images/banner_men.png" alt="banner men" />
                   <Typography><span></span>Currently working on <b>  Portfolio</b></Typography>
                </Box>
              </Item>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
             <Item style={{ background: "transparent", boxShadow: "none" }}>
              <Box className="bottom_caption">
                 <Typography variant="h4">
                   If you think math is hard, try web design.
                 </Typography>
              </Box>
             </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Banner;
