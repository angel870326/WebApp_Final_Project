import React, { useState } from 'react';
// style
import { brownTheme } from "@/styles/jss/components/AnimalListpage/generalStyle";
import { ThemeProvider } from '@mui/material/styles';
import { primaryColor } from '@/styles/jss/animal-cloud-adoption';
//mui components
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

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

        {groups.map((group, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'left' }}>
            {group.map((animal) => (
              <Card key={animal.id} sx={{ width: "30.6%", marginBottom: 2, marginLeft: '2%' }}>
                                     
                <CardMedia
                  component="img"
                  height="200"
                  image={animal.image}
                  alt={animal.name}
                />
                                      
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={primaryColor}>
                    {animal.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {animal.shelter}<br /> {animal.type}<br />{animal.birth_year}<br />{animal.numMember}
                  </Typography>
                </CardContent>
                                      
                <CardActions style={{justifyContent: 'center', marginBottom: 10}}>
                  <Button size="small" variant="contained">查看更多</Button>
                </CardActions>

              </Card>
             ))}
          </div>
        ))}
          
        {/* 頁數 */}
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

      </ThemeProvider>
    </div>
  );
};

export default AnimalList;

