import React, { useEffect, useState } from 'react';
// component
import { Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { content, editBtn } from '@/styles/jss/components/AccountPage/accountInfoStyle';

export default function AdopterInfo(props) {

  // Call API
  const [isLoading, setLoading] = useState(true);
  const [user_name, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [anonymous, setAnonymous] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        // use memberId = 1 just for testing
        const response = await fetch('/api/getAccountInfo/1');
        const jsonData = await response.json();
        setUserName(jsonData.user_name);
        setName(jsonData.name);
        setEmail(jsonData.email);
        setPhone(jsonData.phone);
        setAnonymous(jsonData.anonymous);
      } catch (error) { }
      setLoading(false);
    }
    fetchData();
  }, []);
  // const user_name = 'user_name';
  // const name = 'nick_name';
  // const email = 'abc@gmail.com';
  // const phone = '09xxxxxxxx';
  // const anonymous = '是';

  if (isLoading) {
    return;
  } else {
    return (
      <div style={content}>
        <h2 style={title}>個人資料</h2>
        <div style={divLine} />
        <Grid container spacing={2} sx={{ padding: '10px 30px 30px 30px' }} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Typography>帳號</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{user_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>暱稱</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>E-mail</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>手機</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{phone}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>密碼</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>***</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>捐款時是否匿名</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{anonymous}</Typography>
          </Grid>
          <Link href="/account/edit">
            <Button variant="outlined" sx={{ ...editBtn, marginTop: '40px' }}>編輯</Button>
          </Link>
        </Grid>
      </div>
    );
  }

}