import React from "react"
import { Grid,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material"

// components
import Head from "next/head";
import Header from "./Header/Header"
import HeaderLinks from "./Header/HeaderLinks"
import Footer from "./Footer"

// style
import { bgColor, brownColor, primaryColor } from "@/styles/jss/animal-cloud-adoption"

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
          <Container maxWidth="lg">
            {children}
          </Container>
          <Footer/>
        </Grid>
      </div>
    </ThemeProvider>

  )
}