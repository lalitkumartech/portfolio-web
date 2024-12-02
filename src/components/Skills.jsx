import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import { BorderBottom } from "@mui/icons-material";

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

function Skills() {
  return (
    <>
       <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            p: { xs: "0rem", sm: "2rem", md: "3rem" }, // Responsive font sizes
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
              <Box className="project_row">
                <Box className="project_title">
                  <Typography variant="h4">
                    <span>#</span>Skills
                  </Typography>
                  {/* <Typography>
                    <a href="!#">
                      view all <span>{"~~>"}</span>
                    </a>
                  </Typography> */}
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{
              p: { xs: "1rem", sm: "2rem", md: "4rem" }, // Responsive font sizes
            }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Box className="banner_second_row">
                  <img style={{width:'100%'}} src="/images/skills01.png" alt="banner men" />
                   {/* <Typography><span></span>Currently working on <b>  Portfolio</b></Typography> */}
                </Box>
            </Item>
          </Grid>
          
           <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="skills_row" sx={{
    // display: 'flex',
    display: {xs: 'block',sm: 'block', md: 'flex'},
    flexDirection: { xs: 'column', sm: 'row' }, // Stack in column for small screens
    alignItems: 'baseline',
    justifyContent: {xs: 'center', sm: 'center', md: 'space-between'},
  }}>
                <Box className="project_about">
                    {/* <Typography>html scss react flash</Typography> */}

                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Library
                        </Typography>
                        <Typography variant="h6">Bootstrap, Mui,</Typography>
                    </Box>
                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Tool
                        </Typography>
                        <Typography variant="h6">Visual Studio Code (VSCode), Figma, photoshop,</Typography>
                    </Box>
                </Box>
                

                <Box>
                <Box className="project_about">
                    {/* <Typography>html scss react flash</Typography> */}

                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Web Development
                        </Typography>
                        <Typography variant="h6">HTML5, CSS3, SCSS, JavaScript, React.js, Tailwind CSS, Bootstrap 5, Material-UI (MUI).</Typography>
                    </Box>
                </Box>
                <Box className="project_about">
                    

                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Framework
                        </Typography>
                        <Typography variant="h6">Wordpress</Typography>
                    </Box>
                </Box>
                </Box>

                <Box>
              

                
                <Box className="project_about">
                   
                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Key Areas
                        </Typography>
                        <Typography variant="h6">
                        Responsive Design.
                        <br/>
Website Optimization.<br/>
Clean and Maintainable Code.
                         </Typography>
                    </Box>

                    
                </Box>
                <Box className="project_about">
                   
                    <Box className="project_about_detail" >
                        <Typography variant="h4" style={{BorderBottom:'1px solid #fff'}}>
                        Other
                        </Typography>
                        <Typography variant="h6">GitHub, website Optimizing sites </Typography>
                    </Box>

                    
                </Box>

                </Box>
                </Box>

            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Skills;