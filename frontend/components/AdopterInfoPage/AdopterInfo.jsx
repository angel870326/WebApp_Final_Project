import React, { useEffect, useState } from 'react';
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { Grid, Typography } from '@mui/material';

// style
const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

export default function AdopterInfo(props) {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        // use memberId = 1 just for testing
        const response = await fetch('/api/getAdopterInfo/1');
        const jsonData = await response.json();
        setName(jsonData.name);
        setNumber(jsonData.number);
        setAmount(jsonData.amount);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  // const name = 'nick_name';
  // const number = 1;
  // const amount = 1000;

  return (
    <div style={content}>
      <h2 style={title}>個人資料</h2>
      <div style={divLine} />
      <Grid container spacing={2} sx={{ padding: '10px 30px 30px 30px' }}>
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