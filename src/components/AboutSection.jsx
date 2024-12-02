import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";

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

function AboutSection() {
  const location = useLocation();

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/about");
  };

  return (
    <>
      <Box component="main">
        <Header />

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

            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="banner_fist_row" style={{ padding: "0px" }}>
                  <Typography>
                    I am Lalit Kumar,<br/>
                    <br/>
                     a front-end developer from Delhi, India,<br/>
                    with experience in building responsive and user-friendly
                    websites. I focus on creating modern web designs and
                    ensuring smooth functionality to meet client needs. I have
                    worked with various clients and a startup company, where I
                    gained practical knowledge in web development and learned
                    how to optimize websites for better performance.  I always strive to improve my skills and stay updated with the latest technologies.
                  </Typography>
                  {/* Conditionally render button */}
                  {location.pathname !== "/about" && (
                    <Button onClick={handleRedirect}>
                      Read More{" "}
                      <span style={{ paddingLeft: "5px" }}>{"~~>"}</span>
                    </Button>
                  )}
                </Box>
              </Item>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{
                p: { xs: "1rem", sm: "2rem", md: "6rem" }, // Responsive font sizes
                pt: "0rem !important",
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
      </Box>
    </>
  );
}

export default AboutSection;
