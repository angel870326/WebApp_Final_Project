import React from 'react';
import { brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Link, Button } from '@mui/material';

export default function JoinBtns({firstAdoptionStatus}) {
  return (
    <div>
        {firstAdoptionStatus !== "審核中" && (
          <>
          {/* 加入認養計畫按鈕 */}
          {firstAdoptionStatus === "認養中" ? (
            <ThemeProvider theme={brownTheme}>
              <Button href="/ExtendAdopt" variant="contained" color="primary" sx={{ mt:2 }}>
                延長認養計畫
              </Button>
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={brownTheme}>
              <Button href="/JoinAdopt" variant="contained" color="primary" sx={{ mt:2 }}>
                加入認養計畫
              </Button>
            </ThemeProvider>
          )}
          <Typography variant="body2" component="p" sx={{ mt:1.5 }}>
            <Link href="/faq">了解認養流程</Link>
          </Typography>
          </>
        )}
    </div>
  )
}
