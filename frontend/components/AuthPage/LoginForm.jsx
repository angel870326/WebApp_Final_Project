import React, { useState, useEffect } from 'react';
import { handleLogin, isLoggedIn, logout } from "@/services/auth"
import { Box, Button, Link, Grid, Container, TextField, IconButton, InputAdornment } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { title, plan, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // 登入與驗證相關
  const [userAccount, setUserAccount] = useState({
    username: '',
    password: ''
  });

  const handleUpdate = event => {
    setUserAccount({...userAccount, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    if (!username || !password) {
      // 使用者沒有填寫資料，發出警告 Alert
      alert('請填寫帳號和密碼！');
    } else {
      logout()
      handleLogin(userAccount)
      if (isLoggedIn()) {
        // 導回首頁
        window.location.href = '/';
      } else {
        alert('帳號或密碼錯誤！');
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
            登入
            </h2>
            <Box 
              component="form"
              method="post"
              onSubmit={event => {
                handleSubmit(event)
              }}
              noValidate
              sx={{ mt: 1 }}
              >
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="帳號"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleUpdate}
              />
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="密碼"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      </InputAdornment>
                  )
                  }}
                  onChange={handleUpdate}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                  登入
              </Button>
              <Grid container>
                  <Grid item>
                  <Link href="/auth/register" variant="body2">
                      還沒有帳號？點此註冊
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
