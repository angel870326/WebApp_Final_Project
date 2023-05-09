import React, { useState } from 'react';
// style
import { title, brownTheme, divLine } from "@/styles/jss/components/AnimalListpage/generalStyle";
import { ThemeProvider } from '@mui/material/styles';
// mui conponents
import { Button } from '@mui/material';
// select bar
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// below function: {SelectBar, SortButton} --> SearchCond

// 選單欄
function SelectBar() {
  const [types, setTypes] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [area, setArea] = useState('');
  
  return(
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120}}>
        <InputLabel id="demo-simple-select-helper-label">動物品種</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={types}
          label="動物品種"
          onChange={(e) => setTypes(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"貓"}>貓</MenuItem>
          <MenuItem value={"狗"}>狗</MenuItem>
        </Select>
        <FormHelperText>helper text</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>年紀</InputLabel>
        <Select
          value={age}
          label="年紀"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"0-1"}>0-1 歲</MenuItem>
          <MenuItem value={"1-3"}>1-3 歲</MenuItem>
          <MenuItem value={"3-6"}>3-6 歲</MenuItem>
          <MenuItem value={"6+"}>6 歲以上</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>性別</InputLabel>
        <Select
          value={sex}
          label="性別"
          onChange={(e) => setSex(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"公"}>公</MenuItem>
          <MenuItem value={"母"}>母</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>收容地點</InputLabel>
        <Select
          value={area}
          label="收容地點"
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
      </FormControl>

    </div>
  );
}

// 排序按鈕
function SortButton(){
  const [color1, setColor1] = useState('primary');
  const [color2, setColor2] = useState('primary');
  const handleClick1 = () => {
    setColor1(prevColor => prevColor === 'primary' ? 'secondary' : 'primary');
  };
  const handleClick2 = () => {
    setColor2(prevColor => prevColor === 'primary' ? 'secondary' : 'primary');
  };

  return(
    <p>排序方式：
      <Button variant="outlined" onClick={handleClick1} color={color1} sx={{m: 0.5}}>收容時間</Button>
      <Button variant="outlined" onClick={handleClick2} color={color2} sx={{m: 0.5}}>認養人數</Button>
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