import { defaultFont, brownColor } from "/styles/jss/animal-cloud-adoption.js";
import { makeStyles } from "@mui/styles";

const headerLinksStyle = makeStyles({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    height: "50px",
    width: "auto",
    margin: "0",
    padding: "0",
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "white",
    height: "50px",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "50px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: brownColor,
      background: "transparent"
    },
  },
  notificationNavLink: {
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: brownColor,
    backgroundColor: "transparent"
  },
//   icons: {
//     width: "20px",
//     height: "20px",
//     marginRight: "3px"
//   },
//   socialIcons: {
//     position: "relative",
//     fontSize: "20px !important",
//     marginRight: "4px"
//   },
//   dropdownLink: {
//     "&,&:hover,&:focus": {
//       color: "inherit",
//       textDecoration: "none",
//       display: "block",
//       padding: "10px 20px"
//     }
//   },
});

export default headerLinksStyle;
