
import React from "react"
import Layout from '@/components/Layout'
import { Grid } from "@mui/material";
import { title } from "@/styles/jss/animal-cloud-adoption.js";
import AdopterInfo from '@/components/AdopterInfoPage/AdopterInfo'
import AdopterAnimalInfo from '@/components/AdopterInfoPage/AdopterAnimalInfo'


export default function AdoptersInfoPage() {

  return (
    <Layout>
      <h1 style={title}>認養人資訊</h1>
        <Grid container spacing={5} sx={{marginTop: '50px', marginBottom: '50px'}}>
          <Grid item xs={12} md={4}>
            <AdopterInfo />
          </Grid>
          <Grid item xs={12} md={8}>
            <AdopterAnimalInfo />
          </Grid>
        </Grid>
    </Layout>
  )
}