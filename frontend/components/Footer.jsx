import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import clsx from 'clsx'
// @mui/material components
import { List, ListItem } from "@mui/material";

import footerStyle from "/styles/jss/components/footerStyle.js";

export default function Footer(props) {
  const classes = footerStyle();
  const { whiteFont } = props;
  const footerClasses = clsx({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = clsx({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <a>&copy; 2023 NTU Web APP Programming Group 9.</a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
