import React from 'react'
//style
import { title, content, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
//my components
import SearchCond from './SearchCond'
import SearchRes from './SearchRes'
//mui components
import { Button } from '@mui/material';

function Home() {
  return (      
    <div>
      <h1 style={title}> 可認養動物列表 </h1>
      
      <div style={{textAlign: "right", margin: '0 50px'}}>
        <ThemeProvider theme={brownTheme}>
        <Button variant="contained" href="/faq" target="_blank">了解認養流程</Button>
        </ThemeProvider>     
      </div>
      
      <div style={content}>
        <SearchCond />
      </div>
      
      <div style={content}>
        <SearchRes />
      </div>
      
    </div>
  );
}

export default Home
