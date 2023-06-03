import React, { useEffect, useState } from 'react';
// components
import { Button, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { getUser } from "@/services/auth";
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { moreBtn } from '@/styles/jss/components/AdopterListPage/adopterListStyle';

const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

export default function AccountAnimalInfo() {

  // Call API
  const [isLoaded, setLoaded] = useState(false);
  const [number, setNumber] = useState([]);
  const [amount, setAmount] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/getAccountAdoptInfo/${getUser()}`);
        const jsonData = await response.json();
        setNumber(jsonData.number);
        setAmount(jsonData.amount);
      } catch (error) { }
      try {
        const response = await fetch(`/api/getAccountAnimal/${getUser()}`);
        const jsonData = await response.json();
        setAnimalData(jsonData);
      } catch (error) { }
      setLoaded(true);
    }
    fetchData();
  }, []);
  // const number = 1;
  // const amount = 1000;
  // const animalData = [{ img: '/animals/1.jpg', title: 'name1', state: state_date, link: '/animals/animalsInfo', },];

  return (
    <>
      {isLoaded && (
        <div style={content}>
          <h2 style={title}>雲認養動物列表</h2>
          <div style={divLine} />
          <Grid container spacing={2} sx={{ padding: '10px 30px 5px 30px' }}>
            <Grid item xs={4}>
              <Typography>累積認養動物數</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{number}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>累積認養金額</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{amount}</Typography>
            </Grid>
          </Grid>
          <ImageList
            sx={{
              width: "100%",
              height: 300,
              overflow: 'auto',
              padding: '10px 30px 30px 30px',
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.3)',
              },
            }}
            gap={10}
          >
            {animalData.map((item) => (
              <ImageListItem key={item.animalId}>
                <img
                  src={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format`}
                  srcSet={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ height: 200, width: 300, objectFit: 'cover' }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.state}
                  position="below"
                  sx={{
                    '& .MuiImageListItemBar-title': {
                      color: item.state === '認養結束' ? 'grey' : 'inherit'
                    },
                    '& .MuiImageListItemBar-subtitle': {
                      color: item.state === '審核中' ? 'red' : item.state === '認養結束' ? 'grey' : 'inherit'
                    }
                  }}
                />
                <a href={`/animals/animalsInfo?a_id=${item.animalId}`} target="_blank">
                  <Button variant="outlined" sx={{ ...moreBtn, marginBottom: '10px' }}>查看更多</Button>
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </>
  );

}