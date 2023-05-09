import {container,
    hexToRGBAlpha,
    defaultFont,
    primaryColor,
    brownColor,
    greyColor,
    infoColor,
    transition,
    boxShadow,
    drawerWidth
  } from "@/styles/jss/animal-cloud-adoption.js";

const appBar = {
  display: "flex",
  border: "0",
  borderRadius: "3px",
  padding: "0.625rem 0",
  marginBottom: "20px",
  color: "white",
  background: primaryColor,
  width: "100%",
  height: "70px",
  boxShadow:
    "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  transition: "all 150ms ease 0s",
  alignItems: "center",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  position: "relative",
  zIndex: "unset"
};

const absolute = {
  position: "absolute",
  zIndex: "1100"
};

const fixed = {
  position: "fixed",
  zIndex: "1100"
};

const headerContainer = {
  ...container,
  width: "100%",
  flex: "1",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  flexWrap: "nowrap",
};

const flex = {
  flex: 1
};

const title = {
  ...defaultFont,
  lineHeight: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  borderRadius: "3px",
  textTransform: "none",
  color: "white",
  padding: "8px 16px",
  letterSpacing: "unset",
  "&:hover,&:focus": {
    color: brownColor,
    background: "transparent"
  }
};
const appResponsive = {
  margin: "20px 10px"
};

// const primary = {
//   backgroundColor: primaryColor,
//   color: "#FFFFFF",
//   boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
//     primaryColor,
//     0.46
//   )}`
// };

// const info = {
//   backgroundColor: infoColor,
//   color: "#FFFFFF",
//   boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
//     infoColor,
//     0.46
//   )}`
// };

// const transparent = {
//   backgroundColor: "transparent !important",
//   boxShadow: "none",
//   paddingTop: "25px",
//   color: "#FFFFFF"
// };

// const dark = {
//   color: "#FFFFFF",
//   backgroundColor: "#212121 !important",
//   boxShadow:
//     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
// };

// const white = {
//   border: "0",
//   padding: "0.625rem 0",
//   marginBottom: "20px",
//   color: "#555",
//   backgroundColor: "#fff !important",
//   boxShadow:
//     "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
// };

const drawerPaper = {
  '& .MuiDrawer-paper': {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition
  }
}
  
export {
  appBar,
  absolute,
  fixed,
  headerContainer,
  flex,
  title,
  appResponsive,
  // primary,
  // info,
  // transparent,
  // dark,
  // white,
  drawerPaper
};
  