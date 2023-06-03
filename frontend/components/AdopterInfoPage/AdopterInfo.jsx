import React, { useEffect, useState } from 'react';
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

// style
const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

export default function AdopterInfo() {

  // Call API
  const router = useRouter();
  const { m_id } = router.query;
  const [isLoaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    if (m_id) {
      async function fetchData() {
        try {
          const response = await fetch(`/api/getAdopterInfo/${m_id}`);
          const jsonData = await response.json();
          setName(jsonData.name);
          setNumber(jsonData.number);
          setAmount(jsonData.amount);
        } catch (error) { }
        setLoaded(true);
      }
      fetchData();
    }
  }, [m_id]);
  // const name = 'nick_name';
  // const number = 1;
  // const amount = 1000;

  return (
    <>
      {isLoaded && (
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
      )}
    </>
  );

}