import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
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

function Project() {
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
                    <span>#</span>project
                  </Typography>
                  <Typography>
                    <a href="!#">
                      view all <span>{"~~>"}</span>
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="project_about">
                    <img src="/images/project_01.jpg" alt="thumnail" />
                    <Typography>html scss react flash</Typography>

                    <Box className="project_about_detail">
                        <Typography variant="h4">
                        ChertNodes
                        </Typography>
                        <Typography variant="h6">html scss react flash</Typography>
                        <a href="!#">live <span>{"~~>"}</span></a>
                    </Box>
                </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="project_about">
                    <img src="/images/project_01.jpg" alt="thumnail" />
                    <Typography>html scss react flash</Typography>

                    <Box className="project_about_detail">
                        <Typography variant="h4">
                        ChertNodes
                        </Typography>
                        <Typography variant="h6">html scss react flash</Typography>
                        <a href="!#">live <span>{"~~>"}</span></a>
                    </Box>
                </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <Item style={{ background: "transparent", boxShadow: "none" }}>
                <Box className="project_about">
                    <img src="/images/project_01.jpg" alt="thumnail" />
                    <Typography>html scss react flash</Typography>

                    <Box className="project_about_detail">
                        <Typography variant="h4">
                        ChertNodes
                        </Typography>
                        <Typography variant="h6">html scss react flash</Typography>
                        <a href="!#">live <span>{"~~>"}</span></a>
                    </Box>
                </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Project;
