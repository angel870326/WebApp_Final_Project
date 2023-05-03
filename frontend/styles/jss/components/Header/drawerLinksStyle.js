import { defaultFont } from "/styles/jss/animal-cloud-adoption.js";
import { makeStyles } from "@mui/styles";

const drawerLinksStyle = makeStyles({
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
    margin: "0",
    padding: "0",
    width: "100%",
    "&:after": {
      width: "calc(100% - 30px)",
      content: '""',
      display: "block",
      height: "1px",
      marginLeft: "15px",
      backgroundColor: "#e5e5e5",
    },
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "15px",
    textDecoration: "none",
    textAlign: "left",
    marginLeft: "15px",
    display: "inline-flex",
    "&:hover, &:focus": {
      color: "#776153",
      background: "rgba(209, 197, 189, 0.5)",
    },
    width: "calc(100% - 30px)",
    marginBottom: "8px",
    marginTop: "8px",
    "& > span:first-child": {
      justifyContent: "flex-start",
    },
  },
  // notificationNavLink: {
  //   color: "#FFF",
  //   padding: "0.9375rem",
  //   fontWeight: "400",
  //   fontSize: "12px",
  //   textTransform: "uppercase",
  //   lineHeight: "20px",
  //   textDecoration: "none",
  //   margin: "0px",
  //   display: "inline-flex",
  //   top: "4px"
  // },
  registerNavLink: {
    // backgroundColor: naviPillColor,
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "15px",
    textDecoration: "none",
    textAlign: "left",
    marginLeft: "15px",
    display: "inline-flex",
    "&:hover, &:focus": {
      color: "#776153",
      background: "rgba(209, 197, 189, 0.5)",
    },
    width: "calc(100% - 30px)",
    marginBottom: "8px",
    marginTop: "8px",
    "& > span:first-child": {
      justifyContent: "flex-start",
    },
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
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

export default drawerLinksStyle;
