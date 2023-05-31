import React, { useState } from 'react';
// style
import { title, divLine, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
// select bar
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// mui conponents
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

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
    <div>
      <FormControl><p>排序方式：</p></FormControl>
      <FormControl>
        <Button
          disableElevation
          onClick={() => handleSort('numAnimal')}
          variant={sortBy === 'numAnimal' ? 'contained' : 'outlined'}
          color={sortBy === 'numAnimal' ? 'secondary' : 'primary'}
          sx={{m: 0.5}}
        >當前收容動物數量</Button>
        <FormHelperText>最多 → 最少</FormHelperText>
      </FormControl>
    </div>
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

  // reset 按鈕
  const handleReset = () => {
    setArea("");
    setSortBy("");
  }

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

      <div style={{ position: 'relative', textAlign: 'center' }}>
        <Button variant="contained" size="large" onClick={handleSearch}>搜尋</Button>
        <IconButton color="primary" style={{ position: 'absolute', marginLeft: "10px"}}>
          <RestartAltIcon onClick={handleReset} />
        </IconButton>
      </div>

    </ThemeProvider>
  );
}

export default SearchCond;
