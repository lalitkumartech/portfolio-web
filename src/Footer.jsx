import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Container, Toolbar, Typography } from "@mui/material";

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

function Footer() {
  // Redirect to Github Account

  const handleGitHub = ()=>{
    window.open('https://github.com/lalitkumartech', "_blank")
  }
  return (
    <>
      <Box component="main">
        <Container maxWidth="lg" style={{borderTop:'1px solid #ABB2BF'}}>
          <Grid
            container
            spacing={2}
            sx={{
              p: { xs: "0rem", sm: "2rem", md: "3rem" }, // Responsive font sizes
            }}
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_fist_row" style={{ padding: "0px" }}>
                  <Typography
                    variant="h6"
                    className="logo_text"
                    sx={{
                      flexGrow: 1,
                      textAlign: "start",
                      color: "#fff",
                    }}
                  >
                    Web{" "}
                    <span style={{ color: "#C778DD", fontWeight: "bold" }}>
                      Designer
                    </span>
                  </Typography>
                  <Typography
                      
                        style={{
                          textTransform: "lowercase",
                          display: "flex",
                          alignItems: "center",
                          paddingBottom:'0px'
                        }}
                      >
                        <EmailIcon style={{ marginRight: "5px" }} />
                        hubbyraj56@gmail.com
                      </Typography>
                  <Typography  style={{
                          paddingTop:'10px'
                        }}>
                  Web designer and front-end developer
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{
                display: { xs: "block", sm: "block", md: "flex" },
                flexDirection: { xs: "column", sm: "row" }, // Stack in column for small screens
                alignItems: "baseline",
                justifyContent: { xs: "center", sm: "center", md: "end" },
              }}
            >
              <Item style={{ background: "transparent", boxShadow: "none", }}>
                <Box className="skills_row">
                  <Box className="project_about" style={{ margin: "0px", border:"0px" }}>
                    {/* <Typography>html scss react flash</Typography> */}

                    <Box className="project_about_detail">
                      <Typography
                        variant="h4"
                        style={{textAlign:'center'}}
                      >
                       Media
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent:'space-between'
                          
                        }}
                      >
                       <Button style={{border:'0'}}> <CallIcon style={{ marginRight: "5px",color:'#D9D9D9' }} /></Button>
                       <Button style={{border:'0'}} onClick={handleGitHub}> <GitHubIcon style={{ marginRight: "5px",color:'#D9D9D9' }}/></Button>
                       
                      </Typography>
                     
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>

            <Typography style={{color:'#D9D9D9',margin:'auto'}}>
              © Copyright 2022. Made by Lalit Kumar
            </Typography>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
