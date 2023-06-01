import React from "react";
// components
import { Grid, Box, Avatar, Typography, Button, Divider } from "@mui/material"
// style
import { footer,
  footerLine,
  copyRight,
  copyRightInvisable,
  footerBtn,
  icon,
} from "/styles/jss/components/footerStyle.js";


// Send email
const sendEmail = () => {
  const emailAddress = 'animal.cloud.adoption@gmail.com';
  const mailtoLink = `mailto:${emailAddress}`;

  window.location.href = mailtoLink;
};

export default function Footer() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={footer}>
      <Grid item xs={12} md={12} lg={12} xl={12} >
        <Box sx={footerLine}>
          <Button variant="text" onClick={sendEmail} sx={footerBtn}>聯絡我們</Button>
          <Divider orientation="vertical" flexItem />
          <a href={"/faq"} target="_blank">
            <Button variant="text" sx={footerBtn}>常見問題</Button>
          </a>  
        </Box>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12} >
        <Box sx={footerLine}>          
          <Avatar alt="logo" src="/favicon.ico" sx={icon} /> 
          <Typography sx={copyRight}>&copy; 2023 Animal Cloud Adoption</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12} >
        <Box sx={footerLine}>       
          <Typography sx={copyRightInvisable}>111-2 NTU Web APP Programming Group 9</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
