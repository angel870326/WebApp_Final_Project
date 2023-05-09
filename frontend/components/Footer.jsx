import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// style
import { footer,
  footerContainer,
  a,
  footerWhiteFont,
} from "/styles/jss/components/footerStyle.js";


export default function Footer(props) {
  const { whiteFont } = props;
  return (
    <footer style={{...footer, ...footerWhiteFont}}>
      <div style={footerContainer}>
        <a style={a}>&copy; 2023 NTU Web APP Programming Group 9.</a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
