import React from 'react';
// component
import { Grid, Typography, Button, TextField, MenuItem } from '@mui/material';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// style
import { title, divLine, brownColor} from "@/styles/jss/animal-cloud-adoption.js";
import { content, editBtn } from '@/styles/jss/components/AccountPage/accountInfoStyle';
import { styled } from '@mui/material/styles';

const fieldWidth = '90%'

const InfoTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: brownColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: brownColor,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: brownColor,
    },
  },
});

const InfoFormControl = styled(FormControl)({
  '& label.Mui-focused': {
    color: brownColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: brownColor,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: brownColor,
    },
  },
});


// data
const user_name = 'user_name';
const name = 'nick_name';
const email = 'abc@gmail.com';
const phone = '09xxxxxxxx';
const anonymous = '0';

// 這裡再麻煩檢查一下對不對
const anonymous_choice = [
  {
    value: 0,
    label: '否',
  },
  {
    value: 1,
    label: '是',
  },
];

export default function AdopterInfo(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={content}>
      <h2 style={title}>編輯個人資料</h2>
      <div style={divLine}/>
      <Grid container spacing={2} sx={{padding: '10px 30px 30px 30px'}} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Typography>帳號</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            disabled
            id="outlined-disabled"
            label="固定"
            defaultValue={user_name}
            sx={{width: fieldWidth}}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>暱稱</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            required
            id="outlined-required"
            label="必填"
            defaultValue={name}
            sx={{width: fieldWidth}}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>E-mail</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            required
            id="outlined-required"
            label="必填"
            defaultValue={email}
            sx={{width: fieldWidth}}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>手機</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            required
            id="outlined-required"
            label="必填"
            defaultValue={phone}
            sx={{width: fieldWidth}}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>新密碼</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoFormControl sx={{width: fieldWidth}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">選填</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="選填"
            />
          </InfoFormControl>
        </Grid>
        {/* <Grid item xs={6}>
          <Typography>新密碼</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            id="outlined-password-input"
            label="選填"
            type="password"
            autoComplete="current-password"
            sx={{width: fieldWidth}}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>再次確認新密碼</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            id="outlined-password-input"
            label="選填"
            type="password"
            autoComplete="current-password"
            sx={{width: fieldWidth}}
          />
        </Grid> */}
        <Grid item xs={6}>
          <Typography>捐款時是否匿名</Typography>
        </Grid>
        <Grid item xs={6}>
          <InfoTextField
            id="outlined-required"
            select
            label="必填"
            defaultValue={anonymous}
            sx={{width: fieldWidth}}
          >
            {anonymous_choice.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </InfoTextField>
        </Grid>
        <a href="/account/">
          <Button variant="outlined" sx={{...editBtn, marginTop: '40px'}}>儲存</Button>
        </a>
      </Grid>
    </div>
  )
}