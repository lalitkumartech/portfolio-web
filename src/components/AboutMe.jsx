import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./Banner";

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

function AboutMe() {
  return (
    <>
      <Box component="main">
       <Header/>
       <Banner/>
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
                      <span>#</span>about me
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
             sx={{
                display:'flex',
                alignItems:'center'
                }}
            >
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_fist_row" style={{ padding: "0px" }}>
                  <Typography>
                    Hello, i’m Lalit kumar<br/> <br/> I’m a self-taught front-end developer
                    based in Kyiv, Ukraine. I can develop responsive websites
                    from scratch and raise them into modern user-friendly web
                    experiences.<br/> <br/> Transforming my creativity and knowledge into a
                    websites has been my passion for over a year. I have been
                    helping various clients to establish their presence online.
                    I always strive to learn about the newest technologies and
                    frameworks.
                  </Typography>
                  <Button>Read More <span style={{paddingLeft:'5px'}}>{"~~>"}</span></Button>
                </Box>
              </Item>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{
                p: { xs: "1rem", sm: "2rem", md: "6rem"  }, // Responsive font sizes
                pt: '0rem !important'
              }}
            >
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_second_row">
                  <img
                    style={{ width: "100%" }}
                    src="/images/about_me.png"
                    alt="about me"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Container>
        <Footer/>
      </Box>
    </>
  );
}

export default AboutMe;
