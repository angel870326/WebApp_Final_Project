import React from 'react';
// components
import { Button } from '@mui/material';
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
const animalData = [
  {
    img: '/animals/animal-1.jpg',
    title: 'name1',
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name2',
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name3',
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-1.jpg',
    title: 'name4',
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-1.jpg',
    title: 'name5',
    link: '/animals/animalsInfo',
  },
  {
    img: '/animals/animal-2.jpg',
    title: 'name6',
    link: '/animals/animalsInfo',
  },
];

export default function AdopterAnimalInfo(props) {
  return (
    <div style={content}>
      <h2 style={title}>雲認養動物列表</h2>
      <div style={divLine}/>
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
                subtitle={
                  <a href={item.link} target="_blank">
                    <Button variant="outlined" sx={{...moreBtn, marginTop: '10px'}}>查看更多</Button>
                  </a>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
    </div>
  )

}