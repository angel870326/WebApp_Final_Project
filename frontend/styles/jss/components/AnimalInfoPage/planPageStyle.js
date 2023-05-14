// 借用了婕妤美美的排版( ^_^)b
import {
    primaryColor,
    brownColor,
    bgColor,
  } from "/styles/jss/animal-cloud-adoption.js";
  import { createTheme } from '@mui/material/styles';
  
  const title = {
    color: primaryColor,
    textAlign: 'center',
  };
  
  // 白色大框框
  const content = {
    marginLeft: '200px',
    marginRight: '200px',
    marginTop: '50px',
    marginBottom: '50px',
    padding: '2%',
    backgroundColor: 'white',
    borderRadius: '16px',
  };
  
  // 定義主題
  const brownTheme = createTheme({
    palette: {
      primary: {
        main: brownColor,
      },
      secondary: {
        main: primaryColor,
      },
    },
  });
  
  // 分隔線
  const divLine = {
    flex: '1', 
    height: '1px', 
    backgroundColor: primaryColor, 
    margin: '20px 50px'
  };
  
  
    
  export{
    title, brownTheme, content, divLine,
  };
      