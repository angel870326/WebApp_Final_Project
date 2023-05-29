import React, { useEffect, useState } from 'react';
// components
import { Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from 'next/router';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { moreBtn } from '@/styles/jss/components/AdopterListPage/adopterListStyle';

const content = {
  padding: '2%',
  backgroundColor: 'white',
  borderRadius: '16px',
};

export default function AdopterAnimalInfo() {

  // Call API
  const router = useRouter();
  const { m_id } = router.query;
  const [isLoading, setLoading] = useState(true);
  const [animalData, setAnimalData] = useState([]);
  useEffect(() => {
    if (m_id) {
      async function fetchData() {
        try {
          const response = await fetch(`/api/getAdopterAnimal/${m_id}`);
          const jsonData = await response.json();
          setAnimalData(jsonData);
        } catch (error) { }
        setLoading(false);
      }
      fetchData();
    }
  }, [m_id]);
  // const animalData = [{ img: '/animals/1.jpg', title: 'name1', link: '/animals/animalsInfo', },];

  if (isLoading) {
    return;
  } else {
    return (
      <div style={content}>
        <h2 style={title}>雲認養動物列表</h2>
        <div style={divLine} />
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
            <ImageListItem key={item.animalId}>
              <img
                src={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format`}
                srcSet={`/animals/${item.animalId}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <a href={`/animals/animalsInfo?a_id=${item.animalId}`} target="_blank">
                    <Button variant="outlined" sx={{ ...moreBtn, marginTop: '10px' }}>查看更多</Button>
                  </a>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }

}