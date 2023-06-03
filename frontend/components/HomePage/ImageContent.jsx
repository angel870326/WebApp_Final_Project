import React, { useEffect, useState } from 'react';
// components
import { Grid, Typography, Box } from '@mui/material'
import { useTheme, useMediaQuery } from '@mui/material'
import CustomCountUp from '@/components/HomePage/CustomCountUp'
// style
import { title, counterContent, item, counterBox, counterTitle, counter } from '@/styles/jss/components/HomePage/imageContentStyle'

export default function ImageContent() {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  // Call API
  const [isLoaded, setLoaded] = useState(false);
  const [animalNum, setAnimalNum] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getIndexInfo');
        const jsonData = await response.json();
        setAnimalNum(jsonData.animalNum);
        setAmount(jsonData.amount);
      } catch (error) { }
      setLoaded(true);
    }
    fetchData();
  }, []);
  // const animalNum = 20
  // const amount = 1000

  return (
    <>
      {isLoaded && (
        <div>
          <Typography sx={title}>動物雲認養</Typography>
          <Grid container spacing={0} sx={counterContent}>
            <Grid item xs={6} md={6} lg={12} sx={item}>
              {/* <Box sx={counterBox}> */}
              <Box style={{ ...counterBox, width: isLg ? '320px' : 'inherit', margin: isLg ? '10px 60px' : '10px 20px' }}>
                <Typography sx={counterTitle}>累積收容動物</Typography>
                <CustomCountUp end={animalNum} style={{ ...counter, fontSize: isXs ? '70px' : '100px' }} />
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={12} sx={item}>
              {/* <Box sx={counterBox}> */}
              <Box style={{ ...counterBox, width: isLg ? '320px' : 'inherit', margin: isLg ? '10px 60px' : '10px 20px' }}>
                <Typography sx={counterTitle}>累積認養金額</Typography>
                <CustomCountUp end={amount} style={{ ...counter, fontSize: isXs ? '70px' : '100px' }} />
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );

}