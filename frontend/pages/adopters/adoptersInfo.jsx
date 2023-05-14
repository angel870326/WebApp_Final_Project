
import React from "react"
import Layout from '@/components/Layout'
import { Grid } from "@mui/material";
import { title, content } from "@/styles/jss/animal-cloud-adoption.js";
import AdopterInfo from '@/components/AdopterInfoPage/AdopterInfo'
import AdopterAnimalInfo from '@/components/AdopterInfoPage/AdopterAnimalInfo'


export default function AdoptersInfoPage() {

  return (
    <Layout>
      <h1 style={title}>認養人資訊</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <AdopterInfo />
          </Grid>
          <Grid item xs={8}>
            <AdopterAnimalInfo />
          </Grid>
        </Grid>
    </Layout>


  )
}