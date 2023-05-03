import React from "react"
import { Grid,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import Header from "./Header/Header"
import HeaderLinks from "./Header/HeaderLinks"
import Footer from "./Footer"

import { bgColor, brownColor, primaryColor } from "@/styles/jss/animal-cloud-adoption"

import Head from "next/head";

const useStyles = makeStyles(() => ({
    main: {
        paddingTop: "150px",
        backgroundColor: bgColor,
    },
}));

const theme = createTheme({
  palette: {
    background: {
      default: bgColor
    }
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: "white",
        "& svg": {
          fontSize: "40px",
        },
        "&:hover:not($disabled)": {
          color: brownColor,
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      root: {
        color: "white",
        "& svg": {
          fontSize: "40px",
        },
        "&:hover:not($disabled)": {
          color: brownColor,
          backgroundColor: "transparent",
        },
      },
    },
  },
})

const dashboardRoutes = [];

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: bgColor }}>
        <Grid container style={{ minHeight: "100vh" }}>
          <Head>
            <title>Animal Cloud Adoption</title>
          </Head>
          <Header
            outes={dashboardRoutes}
            brand="Animal Cloud Adoption"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
          />
          <Container className={classes.main} maxWidth="lg">
            {children}
          </Container>
          <Footer/>
        </Grid>
      </div>
    </ThemeProvider>

  )
}