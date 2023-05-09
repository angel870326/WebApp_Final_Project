import { container, primaryColor } from "/styles/jss/animal-cloud-adoption.js";

// const block = {
//   color: "inherit",
//   padding: "0.9375rem",
//   fontWeight: "500",
//   fontSize: "12px",
//   textTransform: "uppercase",
//   borderRadius: "3px",
//   textDecoration: "none",
//   position: "relative",
//   display: "block"
// };
// const left = {
//   float: "left!important",
//   display: "block"
// };
// const right = {
//   padding: "15px 0",
//   margin: "0",
//   float: "right!important"
// };

const footer = {
  padding: "0.9375rem 0",
  textAlign: "center",
  display: "flex",
  zIndex: "2",
  position: "relative"
};

const footerContainer = {
  ...container,
};

const a = {
  color: primaryColor,
  textDecoration: "none",
  backgroundColor: "transparent"
};
const footerWhiteFont = {
  "&,&:hover,&:focus": {
    color: "#FFFFFF"
  }
};
// const list = {
//   marginBottom: "0",
//   padding: "0",
//   marginTop: "0"
// };
// const inlineBlock = {
//   display: "inline-block",
//   padding: "0px",
//   width: "auto"
// };

// const icon = {
//   width: "18px",
//   height: "18px",
//   position: "relative",
//   top: "3px"
// };


export {
  // block,
  // left,
  // right,
  footer,
  footerContainer,
  a,
  footerWhiteFont,
  // list,
  // inlineBlock,
  // icon
};
