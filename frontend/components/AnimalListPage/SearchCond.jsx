import React, { useState } from 'react';
// style
import { title, divLine, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
// mui conponents
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
// select bar
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


// below function: {SelectBar, SortButton} --> SearchCond

// 選單欄
function SelectBar({ types, setTypes, age, setAge, sex, setSex, area, setArea }) {

  return (
    <div>

      {/* types */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>品種</InputLabel>
        <Select
          value={types}
          label="品種"
          onChange={(e) => setTypes(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"貓"}>貓</MenuItem>
          <MenuItem value={"狗"}>狗</MenuItem>
          <MenuItem value={"其他"}>其他</MenuItem>
        </Select>
      </FormControl>

      {/* sex */}
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

      {/* age */}
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
          <MenuItem value={"2-3"}>2-3 歲</MenuItem>
          <MenuItem value={"4-5"}>4-5 歲</MenuItem>
          <MenuItem value={"5+"}>5 歲或以上</MenuItem>
        </Select>
      </FormControl>

      {/* area */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>收容所地區</InputLabel>
        <Select
          value={area}
          label="收容所地區"
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
function SortButton({ sortBy, setSortBy }) {

  const handleSort = (option) => {
    if (sortBy === option) {
      setSortBy('');
    } else {
      setSortBy(option);
    }
  };

  return (
    <div>
      <FormControl><p>排序方式：</p></FormControl>
      <FormControl>
        <Button
          disableElevation
          onClick={() => handleSort('sheltered_date')}
          variant={sortBy === 'sheltered_date' ? 'contained' : 'outlined'}
          color={sortBy === 'sheltered_date' ? 'secondary' : 'primary'}
          sx={{ m: 0.5 }}
        >收容時間</Button>
        <FormHelperText>最新 → 最舊</FormHelperText>
      </FormControl>

      <FormControl>
        <Button
          disableElevation
          onClick={() => handleSort('numMember')}
          color={sortBy === 'numMember' ? 'secondary' : 'primary'}
          variant={sortBy === 'numMember' ? 'contained' : 'outlined'}
          sx={{ m: 0.5 }}
        >認養人數</Button>
        <FormHelperText>最少 → 最多</FormHelperText>
      </FormControl>
    </div>
  );
}

// main
export default function SearchCond({ onSearch }) {

  const [types, setTypes] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [area, setArea] = useState('');
  const [sortBy, setSortBy] = useState('');

  // 按下搜尋後，丟給爸爸 AnimalListPage 處理
  const handleSearch = () => {
    onSearch({ types, age, sex, area, sortBy });
  };

  // reset 按鈕
  const handleReset = () => {
    setTypes("");
    setAge("");
    setSex("");
    setArea("");
    setSortBy("");
  }

  return (
    <ThemeProvider theme={brownTheme}>
      <h2 style={title}>搜尋條件</h2>
      <div style={divLine} />

      {/* select bar */}
      <div style={{ textAlign: 'center' }}>
        <SelectBar
          types={types}
          setTypes={setTypes}
          age={age}
          setAge={setAge}
          sex={sex}
          setSex={setSex}
          area={area}
          setArea={setArea}
        />
      </div>

      {/* sort button */}
      <div style={{ textAlign: "right", marginRight: '50px' }}>
        <SortButton
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* search button*/}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <Button variant="contained" size="large" onClick={handleSearch}>搜尋</Button>
        <IconButton color="primary" style={{ position: 'absolute', marginLeft: "10px" }}>
          <RestartAltIcon onClick={handleReset} />
        </IconButton>
      </div>

    </ThemeProvider>
  );

}