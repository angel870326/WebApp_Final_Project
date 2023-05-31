import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Link } from '@mui/material';
import { title, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";

export default function LoginRequest() {
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
            ！
            </h2>
        </Box>
        </Container>
    </ThemeProvider>
  )
}
