import React, { useState } from 'react';
// style
import { brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
import { primaryColor } from '@/styles/jss/animal-cloud-adoption';
//mui components
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// next.js compononts
import Link from 'next/link';

// 每頁有 6 個，每 3 個排一列
const AnimalList = ({ animals }) => {
  const pageSize = 6; // 每頁顯示的卡片數量
  const [currentPage, setCurrentPage] = useState(0); // 當前頁碼

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(Math.ceil(animals.length / pageSize) - 1, prev + 1));
  };

  // 根據當前頁碼和每頁顯示的卡片數量計算要顯示的動物
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleAnimals = animals.slice(startIndex, endIndex);
  const groups = visibleAnimals.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    
    return acc;
  }, []);
    
  return (
    <div style={{textAlign: "center"}}>
      <ThemeProvider theme={brownTheme}>
        {groups.length > 0 ? (
          groups.map((group, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              
              {group.map((animal) => (
                <Card key={animal.id}
                  sx={{ width: "32%", mx: '1%', my: '1%', borderRadius: '8px',
                  ':hover': {
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.15s ease-in-out",
                    transform: "scale3d(1.05, 1.05, 1)",
                  }
                }}>
              
                  <CardMedia
                    component="img"
                    height="200"
                    image={"/animals/animal-" + animal.id + ".jpg"}
                    alt={animal.name}
                  />
                                        
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={primaryColor}>
                      {animal.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>品種：</b>{animal.type} ｜ <b>性別：</b>{animal.sex}<br />
                      <b>出生年：</b>{animal.birth_year} 年，今年 {new Date().getFullYear() - parseInt(animal.birth_year)} 歲<br />
                      <b>收容處：</b>{animal.shelter}<br />
                      <b>收容時間：</b>{animal.sheltered_date.split(' ')[0]}<br />
                      <b>認養人數：</b>{animal.numMember}
                    </Typography>
                  </CardContent>
                                        
                  <CardActions style={{justifyContent: 'center', marginBottom: 10}}>
                  <Link href={`/animals/animalsInfo?a_id=${animal.id}`} as={`/animals/animalsInfo/${animal.id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="contained">查看更多</Button>
                  </Link>
                  </CardActions>

                </Card>
              ))}
              
            </div>
          ))
        ) : (
          <p>No animals available QQ</p>
        )}
          
        {/* 頁數 */}

        {groups.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <Button disabled={currentPage === 0} onClick={handleClickPrev}>
              Previous
            </Button>
            <Typography variant="body1" style={{ margin: '10px 1rem' }}>
              Page {currentPage + 1} of {Math.ceil(animals.length / pageSize)}
            </Typography>
            <Button
              disabled={currentPage === Math.ceil(animals.length / pageSize) - 1}
              onClick={handleClickNext}
            >
              Next
            </Button>
          </div>
        )}

      </ThemeProvider>
    </div>
  );
};

export default AnimalList;

