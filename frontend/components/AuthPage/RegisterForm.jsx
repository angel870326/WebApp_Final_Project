import React, { useState } from 'react';
import { Box, Button, Link, Grid, Container, FormControlLabel, Checkbox, TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { title, plan, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";

export default function RegisterForm() {
  const [allowAnonymous, setAllowAnonymous] = useState(false);
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleCheckboxChange = (event) => {
    setAllowAnonymous(event.target.checked);
  };

  //   const handleShowPassword = () => {
  //     setShowPassword((prevValue) => !prevValue);
  //   };
  //   const handleShowConfirmPassword = () => {
  //     setShowConfirmPassword((prevValue) => !prevValue);
  //   };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const account = formData.get('account');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // 檢查輸入值格式是否正確
    const phoneRegex = /^09\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = false;
    let errorMessage = '';

    if (!account || !password || !name || !email || !phone || !confirmPassword) {
      error = true;
      errorMessage = '請填寫完整資訊！';
    } else if (password !== confirmPassword) {
      error = true;
      errorMessage = '請確認兩次輸入的密碼相同！';
      setPasswordError(true);
    } else if (!phone.match(phoneRegex)) {
      error = true;
      errorMessage = '手機號碼格式不正確！';
    } else if (!email.match(emailRegex)) {
      error = true;
      errorMessage = 'Email格式不正確！';
    }

    if (error) {
      alert(errorMessage);
    } else {

      const jsonData = {};
      for (let [key, value] of formData.entries()) {
        jsonData[key] = value;
      }
      jsonData["anonymous"] = allowAnonymous;

      // Call API
      const response = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const responseBody = await response.json();
      switch (responseBody.result) {
        case "Username duplicated":
          alert('帳號名稱已被註冊，請使用別的帳號名稱。');
          break;
        case "Email duplicated":
          alert('Email已被註冊，請使用別的Email。');
          break;
        case "Success":
          alert('註冊成功！');
          window.location.href = '/auth/login';
          break;
        default:
          alert("系統錯誤");
          break;
      }

    }
  };

  return (
    <ThemeProvider theme={brownTheme}>
      <div style={plan}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              alignItems: 'center',
              marginBottom: 8
            }}
          >
            <h2 style={title}>
              註冊
            </h2>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="account"
                    label="帳號名稱"
                    name="account"
                    autoComplete="account"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="暱稱"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="手機號碼"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="密碼"
                    //   type={showPassword ? 'text' : 'password'}
                    type='password'
                    id="password"
                    autoComplete="new-password"
                    error={passwordError}
                  //   InputProps={{
                  //     endAdornment: (
                  //       <InputAdornment position="end">
                  //         <IconButton onClick={handleShowPassword}>
                  //           {showPassword ? <Visibility /> : <VisibilityOff />}
                  //         </IconButton>
                  //       </InputAdornment>
                  //     )
                  //   }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="再次輸入密碼"
                    //   type={showConfirmPassword ? 'text' : 'password'}
                    type='password'
                    id="confirmPassword"
                    autoComplete="new-password"
                    error={passwordError}
                  //   InputProps={{
                  //     endAdornment: (
                  //       <InputAdornment position="end">
                  //         <IconButton onClick={handleShowConfirmPassword}>
                  //           {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  //         </IconButton>
                  //       </InputAdornment>
                  //     )
                  //   }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={allowAnonymous}
                        onChange={handleCheckboxChange}
                        value="allowAnonymous"
                        color="primary"
                      />
                    }
                    label="以匿名捐款"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                註冊
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/auth/login" variant="body2">
                    已經有帳號？點此登入
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );

}