import React from "react"
import Layout from '@/components/Layout'
import { Grid } from "@mui/material";
import { title } from "@/styles/jss/animal-cloud-adoption.js";
import AccountInfo from '@/components/AccountPage/AccountInfo'

export default function AccountPage() {

  return (
    <Layout>
      <h1 style={title}>編輯個人資料</h1>
      暫時放著還沒改
      <AccountInfo />
    </Layout>
  )
}