import React, { useState, useEffect } from 'react';
import { Box, Button, Link, Grid, Container, TextField, IconButton, InputAdornment } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { title, plan, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
// 登入註冊相關
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// 登入 action
// import { login } from '@/actions/authActions';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    // 登入與驗證相關
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const history = useHistory();
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const account = data.get('account');
      const password = data.get('password');
  
      if (!account || !password) {
        // 使用者沒有填寫資料，發出警告 Alert
        alert('請填寫帳號和密碼！');
      } else {
        // 登入 action
        // dispatch(login(account, password));
        window.location.href = '/';
      }
    };

    // 登入與驗證相關
    // useEffect(() => {
    //   if (auth.isAuthenticated) {
    //     localStorage.setItem('id', auth.user.id);
    //     localStorage.setItem('token', auth.token);
    //     // 導回首頁
    //     history.push('/');
    //   } else if (auth.error) {
    //     alert('帳號或密碼錯誤！');
    //   }
    // }, [auth.isAuthenticated, auth.token, auth.user.id, auth.error, history]);

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
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="account"
                label="帳號"
                name="account"
                autoComplete="account"
                autoFocus
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
