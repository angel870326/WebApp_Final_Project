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
export default function SheCard(props) {
  const { shelters } = props;

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

  // 狗腳印
  const getDogPawPrints = (numAnimal) => {
    if (numAnimal >= 11) {
      return '🐾🐾🐾';
    } else if (numAnimal >= 6) {
      return '🐾🐾';
    } else if (numAnimal >= 1) {
      return '🐾';
    } else {
      return '';
    }
  };

  return (
    <div>
      <ThemeProvider theme={brownTheme}>
      {visibleShelters.length > 0 ? (
        visibleShelters.map((shelter) => (
          <Card key={shelters.id}
            sx={{ maxWidth: "100%", my: 2, borderRadius: '8px',
            ':hover': {
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.15s ease-in-out",
              transform: "scale3d(1.05, 1.05, 1)",
            }
          }}>
            <CardContent style={{ display: 'flex', alignItems: 'center', }} sx={{mx: '1%'}}>
              <Typography variant="h5" component="div" color={primaryColor} style={{ width: '40%' }}>
                {shelter.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ width: '30%' }}>
                地址：{shelter.address}<br />收容動物數量：{shelter.numAnimal} 隻 {getDogPawPrints(shelter.numAnimal)}
              </Typography>
              <CardActions style={{ marginLeft: 'auto' }}>
              <Link href={`/shelters/sheltersInfo?s_id=${shelter.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small" variant="contained">查看更多</Button>
              </Link>
              </CardActions>

            </CardContent>
          </Card>
        ))
      ) : (
        <p style={{textAlign: "center"}}>No shelters available QQ</p>
      )}

      {/* 頁數 */}
      {visibleShelters.length > 0 && (
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
      )}
      </ThemeProvider>
    </div>
  );

}