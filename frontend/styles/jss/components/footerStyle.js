import { brownColor, primaryColor } from "/styles/jss/animal-cloud-adoption.js";

const footer = {
  margin: 2,
  padding: 0
};

const footerLine = {
  padding: 0,
  margin: 1,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: "center",
  display: "flex",
  zIndex: "2",
  position: "relative"
}

const copyRight = {
  color: primaryColor,
  textDecoration: "none",
  backgroundColor: "transparent"
};

const copyRightInvisable = {
  color: "transparent",
  textDecoration: "none",
  backgroundColor: "transparent"
};

const footerBtn = {
  padding: 0,
  margin: "0px 10px",
  fontSize: '16px',
  color: primaryColor,
  textDecoration: "none",
  backgroundColor: "transparent",
  "&:hover,&:focus": {
    color: brownColor,
    backgroundColor: "transparent",
  }
};

const icon = {
  width: 30,
  height: 30,
  position: "relative",
  marginRight: 1,
};


export {
  footer,
  footerLine,
  copyRight,
  copyRightInvisable,
  footerBtn,
  icon,
};
