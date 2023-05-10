import React, { useState } from 'react';// style
import { brownTheme } from "@/styles/jss/components/AnimalListpage/generalStyle";
import { ThemeProvider } from '@mui/material/styles';
import { primaryColor } from '@/styles/jss/animal-cloud-adoption';
//mui components
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

//每 5 個換一頁
const ShelterList = ({ shelters }) => {
  const pageSize = 5; // 每頁顯示的卡片數量
  const [currentPage, setCurrentPage] = useState(0); // 當前頁碼

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(Math.ceil(shelters.length / pageSize) - 1, prev + 1));
  };

  // 根據當前頁碼和每頁顯示的卡片數量計算要顯示的動物
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleShelters = shelters.slice(startIndex, endIndex);

  return (
    <div>
      <ThemeProvider theme={brownTheme}>
      {visibleShelters.map((shelter) => (
        <Card key={shelters.id} sx={{ maxWidth: "100%", marginBottom: 2 }}>
{/* 
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={primaryColor}>
              {shelter.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {shelter.address}<br />{shelter.numAnimal}
            </Typography>
          </CardContent>
          
                               
          <CardActions style={{justifyContent: 'right'}}>
            <Button size="small" variant="contained">查看更多</Button>
          </CardActions>

*/}
<CardContent style={{ display: 'flex', alignItems: 'center', }}>

    <Typography variant="h5" component="div" color={primaryColor} style={{ marginRight: 'auto' }}>
      {shelter.name}
    </Typography>
    <Typography variant="body2" color="text.secondary" style={{ marginRight: 'auto' }}>
      {shelter.address}<br />{shelter.numAnimal}
    </Typography>
  <CardActions style={{ marginLeft: 'auto' }}>
    <Button size="small" variant="contained">查看更多</Button>
  </CardActions>
</CardContent>

        </Card>
      ))}

      {/* 頁數 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button disabled={currentPage === 0} onClick={handleClickPrev}>
          Previous
        </Button>
        <Typography variant="body1" style={{ margin: '10px 1rem' }}>
          Page {currentPage + 1} of {Math.ceil(shelters.length / pageSize)}
        </Typography>
        <Button
          disabled={currentPage === Math.ceil(shelters.length / pageSize) - 1}
          onClick={handleClickNext}
        >
          Next
        </Button>
      </div>
      </ThemeProvider>
    </div>
  );
};

export default ShelterList;
