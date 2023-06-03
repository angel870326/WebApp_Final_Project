import React, { useEffect, useState } from 'react';
// component
import { Grid, Typography, Button, TextField, MenuItem } from '@mui/material';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Select from '@mui/material/Select';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getUser } from "@/services/auth";
// style
import { title, divLine, brownColor } from "@/styles/jss/animal-cloud-adoption.js";
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

const handleSubmit = async (event) => {

  event.preventDefault();

  // Form data
  const formData = new FormData(event.target);
  const jsonData = {};
  for (let [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  // Data validation
  var validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (jsonData.name.length > 30) {
    alert("暱稱請勿超過30字");
    return;
  }
  if (!jsonData.email.match(validEmailFormat)) {
    alert("E-mail格式錯誤");
    return;
  }
  if (!jsonData.phone.match(/\d/g) || jsonData.phone.length != 10) {
    alert("手機號碼格式錯誤");
    return;
  }

  // Call API
  const response = await fetch(`/api/updateAccountInfo/${getUser()}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  if (response.ok) {
    alert("更新成功");
  } else {
    alert("系統錯誤");
  }
  window.location.href = "/account";

  return;

};

export default function AccountInfoEdit() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Call API
  const [isLoaded, setLoaded] = useState(false);
  const [user_name, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getUpdatingAccountInfo/${getUser()}`);
        const jsonData = await response.json();
        setUserName(jsonData.user_name);
        setName(jsonData.name);
        setEmail(jsonData.email);
        setPhone(jsonData.phone);
        setAnonymous(jsonData.anonymous);
      } catch (error) { }
      setLoaded(true);
    };
    fetchData();
  }, []);
  // const user_name = 'user_name';
  // const name = 'nick_name';
  // const email = 'abc@gmail.com';
  // const phone = '09xxxxxxxx';
  // const anonymous = 0;

  return (
    <>
      {isLoaded && (
        <div style={content}>
          <h2 style={title}>編輯個人資料</h2>
          <div style={divLine} />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ padding: '10px 30px 30px 30px' }} justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <Typography>帳號</Typography>
              </Grid>
              <Grid item xs={6}>
                <InfoTextField
                  disabled
                  id="user_name"
                  name="user_name"
                  label="固定"
                  defaultValue={user_name}
                  sx={{ width: fieldWidth }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>暱稱</Typography>
              </Grid>
              <Grid item xs={6}>
                <InfoTextField
                  required
                  id="name"
                  name="name"
                  label="必填"
                  defaultValue={name}
                  sx={{ width: fieldWidth }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>E-mail</Typography>
              </Grid>
              <Grid item xs={6}>
                <InfoTextField
                  required
                  id="email"
                  name="email"
                  label="必填"
                  defaultValue={email}
                  sx={{ width: fieldWidth }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>手機</Typography>
              </Grid>
              <Grid item xs={6}>
                <InfoTextField
                  required
                  id="phone"
                  name="phone"
                  label="必填"
                  defaultValue={phone}
                  sx={{ width: fieldWidth }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>新密碼</Typography>
              </Grid>
              <Grid item xs={6}>
                <InfoFormControl sx={{ width: fieldWidth }} variant="outlined">
                  <InputLabel htmlFor="password">選填</InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
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
              <Grid item xs={6}>
                <Typography>捐款時是否匿名</Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: fieldWidth }}>
                  <InputLabel>必填</InputLabel>
                  <Select
                    id="anonymous"
                    name="anonymous"
                    value={anonymous}
                    label="必填"
                    onChange={(e) => setAnonymous(e.target.value)}
                  >
                    <MenuItem value={false}>否</MenuItem>
                    <MenuItem value={true}>是</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Button type="submit" variant="outlined" sx={{ ...editBtn, marginTop: '40px' }}>儲存</Button>
            </Grid>
          </form>
        </div>
      )}
    </>
  );

}