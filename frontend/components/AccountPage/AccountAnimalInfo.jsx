import React from 'react';
// components
import { Button, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { moreBtn } from '@/styles/jss/components/AdopterListPage/adopterListStyle';

const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

// data
const number = 1;   // 待計算
const amount = 1000;   // 待計算
const date = 'donation_end_date'   // 待連資料庫

// Three states
const state_date = `認養期間至 ${date}`
const state_pending = '認養申請審核中'
const state_end = '認養期間已過'

const animalData = [
  {
    img: '/animals/animal-1.jpg',
    title: 'name1',
    state: state_date,
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name2',
    state: state_pending,
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name3',
    state: state_end,
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-1.jpg',
    title: 'name4',
    state: state_end,
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-1.jpg',
    title: 'name5',
    state: state_end,
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name6',
    state: state_end,
    link: '/animals/animalsInfo',
  },
];

export default function AdopterAnimalInfo(props) {
  return (
    <div style={content}>
      <h2 style={title}>雲認養動物列表</h2>
      <div style={divLine}/>
        <Grid container spacing={2} sx={{padding: '10px 30px 5px 30px'}}>
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
            height: 500, 
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
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.state}
                position="below"
                sx={{ 
                  '& .MuiImageListItemBar-title': {
                    color: item.state === state_end ? 'grey' : 'inherit'
                  },
                  '& .MuiImageListItemBar-subtitle': {
                    color: item.state === state_pending ? 'red' : item.state === state_date ? 'black' : item.state === state_end ? 'grey' : 'inherit'
                  }
                }}
              />
              <a href={item.link} target="_blank">
                <Button variant="outlined" sx={{...moreBtn, marginBottom: '10px'}}>查看更多</Button>
              </a>
            </ImageListItem>
          ))}
        </ImageList>
    </div>
  )
}