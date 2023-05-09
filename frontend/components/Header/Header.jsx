import React from "react";
import Link from "next/link";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui components
import { AppBar,
    Toolbar,
    IconButton,
    Button,
    Hidden,
    Drawer,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
// components
import DrawerLinks from "./DrawerLinks";
// style
import { brownColor } from "@/styles/jss/animal-cloud-adoption.js";
import {
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
} from "/styles/jss/components/Header/headerStyle.js";;


export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // React.useEffect(() => {
  //   if (props.changeColorOnScroll) {
  //     window.addEventListener("scroll", headerColorChange);
  //   }
  //   return function cleanup() {
  //     if (props.changeColorOnScroll) {
  //       window.removeEventListener("scroll", headerColorChange);
  //     }
  //   };
  // });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const headerColorChange = () => {
  //   const { color, changeColorOnScroll } = props;
  //   const windowsScrollTop = window.pageYOffset;
  //   if (windowsScrollTop > changeColorOnScroll.height) {
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.remove(classes[color]);
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.add(classes[changeColorOnScroll.color]);
  //   } else {
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.add(classes[color]);
  //     document.body
  //       .getElementsByTagName("header")[0]
  //       .classList.remove(classes[changeColorOnScroll.color]);
  //   }
  // // };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const brandComponent = (
    <Link href="/" as="/">
      <Button sx={title}>{brand}</Button>
    </Link>
  );
  return (
    <AppBar sx={{...appBar, absolute, fixed, color}}>
      <Toolbar sx={headerContainer}>
        {leftLinks !== undefined ? brandComponent : null}
        <div style={flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden mdDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              "&:hover,&:focus": {
                color: brownColor,
                background: "transparent"
              }
            }}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          sx={drawerPaper}
          onClose={handleDrawerToggle}
        >
          <div style={appResponsive}>
            {leftLinks}
            <DrawerLinks />
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "grey",
    "brown",
    "transparent",
    "white",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "grey",
      "brown",
      "transparent",
      "white",
    ]).isRequired
  })
};
