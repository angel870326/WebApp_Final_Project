import React from "react"
import Layout from '@/components/Layout'
import { title } from "@/styles/jss/animal-cloud-adoption.js";
import AccountInfoEdit from '@/components/AccountPage/AccountInfoEdit'

export default function AccountPage() {
  return (
    <Layout>
      <h1 style={title}>我的頁面</h1>
      <AccountInfoEdit />
    </Layout>
  )
}