import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Container, Toolbar, Typography } from "@mui/material";
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

function ContactSection() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleRedirect = ()=>{
    navigate('/contacts')
  }
  return (
    <>
      <Box component="main">
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
                      <span>#</span>contacts
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
                    I’m interested in freelance opportunities. However,<br/> if you
                    have other request or question, don’t<br/> hesitate to contact me
                  </Typography>

                  {/* Conditionally render button */}
      {location.pathname !== '/contacts' && (
        <Button onClick={handleRedirect}>
                    Read More{" "}
                    <span style={{ paddingLeft: "5px" }}>{"~~>"}</span>
                  </Button>
      )}
                 
                </Box>
              </Item>
            </Grid>
           
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactSection;
