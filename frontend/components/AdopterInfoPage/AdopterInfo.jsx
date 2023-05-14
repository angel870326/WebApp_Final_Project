import React from 'react';
import { title, divLine} from "@/styles/jss/animal-cloud-adoption.js";
import { Grid, Typography } from '@mui/material';

// data
const name = 'nick_name';
const number = 1;
const amount = 1000;

// style
const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

export default function AdopterInfo(props) {
  return (
    <div style={content}>
      <h2 style={title}>個人資料</h2>
      <div style={divLine}/>
      <Grid container spacing={2} sx={{padding: '10px 30px 30px 30px'}}>
        <Grid item xs={8}>
          <Typography>暱稱</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>累積認養動物數</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{number}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>累積認養金額</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography>{amount}</Typography>
        </Grid>
      </Grid>
    </div>


    )

}