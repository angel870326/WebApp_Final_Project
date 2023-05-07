import React, { useState } from 'react';
// style
import { title, brownTheme, divLine } from "@/styles/jss/components/AnimalListpage/generalStyle";
import { ThemeProvider } from '@mui/material/styles';
// select bar
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// mui conponents
import { Button } from '@mui/material';

// below function: {SelectBar, SortButton} --> SearchCond

// 選單欄
function SelectBar() {
  const [area, setArea] = useState('');
  return(
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120}}>
        <InputLabel id="label-id">所在地區</InputLabel>
        <Select
          labelId="label-id"
          id="select-id"
          value={area}
          label="所在地區"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"台北市"}>台北市</MenuItem>
          <MenuItem value={"新北市"}>新北市</MenuItem>
          <MenuItem value={"桃園市"}>桃園市</MenuItem>
          <MenuItem value={"台中市"}>台中市</MenuItem>
          <MenuItem value={"高雄市"}>高雄市</MenuItem>
        </Select>
        <FormHelperText>helper text</FormHelperText>
      </FormControl>

    </div>
  );
}

// 排序按鈕
function SortButton(){
  const [color1, setColor1] = useState('primary');
  const handleClick1 = () => {
    setColor1(prevColor => prevColor === 'primary' ? 'secondary' : 'primary');
  };

  return(
    <p>排序方式：
      <Button variant="outlined" onClick={handleClick1} color={color1} sx={{m: 0.5}}>當前收容動物數量</Button>
    </p>
  );
}

// main
function SearchCond() {
  return (
    <ThemeProvider theme={brownTheme}>
      
      <h2 style={title}>搜尋條件</h2>
      <div style={divLine}/>
          
      <div style={{textAlign: 'center'}}>
        <SelectBar />
      </div>

      <div style={{textAlign: "right", marginRight: '50px'}}>
        <SortButton />
      </div>

      <div style={{textAlign: "center"}}>
          <Button variant="contained" size="large">搜尋</Button>
      </div>

    </ThemeProvider>
  );
}

export default SearchCond;
