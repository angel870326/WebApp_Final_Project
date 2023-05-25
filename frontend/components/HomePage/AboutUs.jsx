import React from 'react'
// components
import { Grid, Typography } from '@mui/material'
import { useTheme, useMediaQuery } from '@mui/material'
import HomeSectionLayout from './HomeSectionLayout'
import CustomCountUp from '@/components/HomePage/CustomCountUp'
// style
import { counterContent, item, counterTitle, counter, about } from '@/styles/jss/components/HomePage/aboutUsStyle'


// Data
const animalNum = 20
const amount = 1000

export default function AboutUs() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <HomeSectionLayout sectionTitle={"關於我們"} moreLink={"/animals"}>
      {/* Counter */}
      <Grid container spacing={0} sx={counterContent}>
        <Grid item xs={6} md={6} lg={6} sx={item}>
          <Typography sx={counterTitle}>累積收容動物</Typography>
          <CustomCountUp end={animalNum} style={{...counter, fontSize: isXs ? '70px' : '100px'}} />
        </Grid>
        <Grid item xs={6} md={6} lg={6} sx={item}>
          <Typography sx={counterTitle}>累積認養金額</Typography>
          <CustomCountUp end={amount} style={{...counter, fontSize: isXs ? '70px' : '100px'}} />
        </Grid>
      </Grid>

      {/* Description */}
      <Grid container sx={about}>
        <Grid item>
          <p>再加一些敘述</p>
        </Grid>
      </Grid>
    </HomeSectionLayout>
  )
}