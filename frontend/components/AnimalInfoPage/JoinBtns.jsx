import React from 'react';
import { brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Link, Button } from '@mui/material';

export default function JoinBtns({ firstAdoptionStatus, animalId }) {
  return (
    <div>
      {firstAdoptionStatus !== "審核中" && (
        <>
          {/* 加入認養計畫按鈕 */}
          {firstAdoptionStatus === "認養中" ? (
            <ThemeProvider theme={brownTheme}>
              <Link href={`/animals/extendAdopt?a_id=${animalId}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  延長認養計畫
                </Button>
              </Link>
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={brownTheme}>
              <Link href={`/animals/joinAdopt?a_id=${animalId}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  加入認養計畫
                </Button>
              </Link>
            </ThemeProvider>
          )}
          <ThemeProvider theme={brownTheme}>
            <Typography variant="body2" component="p" sx={{ mt: 1.5 }}>
              <Link href="/faq">了解認養流程</Link>
            </Typography>
          </ThemeProvider>
        </>
      )}
    </div>
  )
}