import React, { useState } from 'react';
// style
import { brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
import { primaryColor } from '@/styles/jss/animal-cloud-adoption';
// mui components
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
// next.js compononts
import Link from 'next/link';

//每 5 個換一頁
export default function ShelterList(shelters) {
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
          <Card key={shelters.id}
            sx={{
              maxWidth: "100%", my: 2, borderRadius: '8px',
              ':hover': {
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.15s ease-in-out",
                transform: "scale3d(1.05, 1.05, 1)",
              }
            }}>
            <CardContent style={{ display: 'flex', alignItems: 'center', }}>

              <Typography variant="h5" component="div" color={primaryColor} style={{ marginRight: 'auto' }}>
                {shelter.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginRight: 'auto' }}>
                {shelter.address}<br />{shelter.numAnimal}
              </Typography>
              <CardActions style={{ marginLeft: 'auto' }}>
                <Link href={`/shelters/sheltersInfo?s_id=${shelter.id}`} style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="contained">查看更多</Button>
                </Link>
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

}