import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Link } from '@mui/material';
import { title, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";

export default function LoginRegisterRequest() {
  return (
    <ThemeProvider theme={brownTheme}>
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
            marginTop: 3,
            alignItems: 'center',
            marginBottom: 3
            }}
        >
            <h2 style={title}>
            請先
            <Link href="/auth/login">登入</Link>
            或是
            <Link href="/auth/register">註冊</Link>
            ！
            </h2>
        </Box>
        </Container>
    </ThemeProvider>
  )
}
