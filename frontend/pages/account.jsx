import React from "react"
import Layout from '@/components/Layout'
import { Grid } from "@mui/material";
import { title } from "@/styles/jss/animal-cloud-adoption.js";
import AccountInfo from '@/components/AccountPage/AccountInfo'
import AccountAnimalInfo from '@/components/AccountPage/AccountAnimalInfo'

export default function AccountPage() {

  return (
    <Layout>
    <h1 style={title}>我的頁面</h1>
      <Grid container spacing={5} sx={{marginTop: '50px', marginBottom: '50px'}}>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <AccountInfo />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <AccountAnimalInfo />
        </Grid>
      </Grid>
    </Layout>
  )
}