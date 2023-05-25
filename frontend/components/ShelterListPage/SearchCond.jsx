import React, { useState } from 'react';
// style
import { title, divLine, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
// select bar
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// mui conponents
import { Button } from '@mui/material';

// below function: {SelectBar, SortButton} --> SearchCond

// 選單欄
function SelectBar(props) {
  const { area, setArea } = props;
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
          <MenuItem value={"北部"}>北部</MenuItem>
          <MenuItem value={"中部"}>中部</MenuItem>
          <MenuItem value={"南部"}>南部</MenuItem>
          <MenuItem value={"東部"}>東部</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}

// 排序按鈕
function SortButton(props){
  const {sortBy, setSortBy } = props;
  const handleSort = (option) => {
    if(sortBy === option){
      setSortBy('');
    }else{
      setSortBy(option);
    }
  };

  return(
    <p>排序方式：
      <Button
        variant="outlined"
        onClick={() => handleSort('numAnimal')}
        color={sortBy === 'numAnimal' ? 'secondary' : 'primary'}
        sx={{m: 0.5}}
      >當前收容動物數量</Button>
    </p>
  );
}

// main
function SearchCond({ onSearch }) {
  const [area, setArea] = useState('');
  const [sortBy, setSortBy] = useState('');

  // 按下搜尋後，丟給爸爸 AnimalListPage 處理
  const handleSearch = () => {
    onSearch({ area, sortBy });
  };

  return (
    <ThemeProvider theme={brownTheme}>
      
      <h2 style={title}>搜尋條件</h2>
      <div style={divLine}/>
          
      <div style={{textAlign: 'center'}}>
        <SelectBar
          area={area}
          setArea={setArea}
        />
      </div>

      <div style={{textAlign: "right", marginRight: '50px'}}>
        <SortButton
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div style={{textAlign: "center"}}>
          <Button variant="contained" size="large" onClick={handleSearch}>搜尋</Button>
      </div>

    </ThemeProvider>
  );
}

export default SearchCond;
