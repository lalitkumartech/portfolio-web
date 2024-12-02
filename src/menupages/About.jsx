import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Container, } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";



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

function About() {
 
  return (
    <Box component="main">
      <Container maxWidth="lg">
        <Grid
          container-fluid
          spacing={2}
          sx={{
           pt: { xs: "0rem", sm: "2rem", md: "5rem" }, // Responsive font sizes
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
              {/* <Box className="project_row"></Box> */}
               <Header />
                <BasicBreadcrumbs/>
                <AboutSection/>
                <Skills/>
               <Footer/>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
