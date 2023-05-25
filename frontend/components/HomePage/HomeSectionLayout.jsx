import React from 'react'
// components
import { Grid, Button } from '@mui/material'
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { homeSection, moreBtn } from '@/styles/jss/components/HomePage/homeStyle';


export default function HomeSectionLayout({ sectionTitle, children, moreLink }) {
  return (
    <div style={homeSection}>
      <h1 style={title}>{sectionTitle}</h1>
      <div style={divLine}/>

      {children}

      {/* Button */}     
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <a href={moreLink}>
            <Button variant="outlined" sx={moreBtn}>查看更多</Button>
          </a>
        </Grid>            
      </Grid>
    </div>
  )
}