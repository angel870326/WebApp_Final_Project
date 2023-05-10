import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { brownTheme } from "@/styles/jss/components/AnimalInfoPage/infoPageStyle";
import { ThemeProvider } from '@mui/material/styles';
import AniInfo from '@/components/AnimalInfoPage/AniInfo';
import AdoptRecord from '@/components/AnimalInfoPage/AdoptRecord';
import OtherAdopters from '@/components/AnimalInfoPage/OtherAdopters';
import JoinBtns from '@/components/AnimalInfoPage/JoinBtns';

// GET 單一 Animal (所有)資訊
const animal = { id: 22, name: '小黑', sex: "母", type: "巴哥犬", brithYear: 2020, personality: "活潑", appearance: "黑色、垂耳", shelter_id: 1};

// GET 此使用者和此動物的所有認養紀錄，由新到舊排序
// 若無紀錄，回傳空陣列
const adoptionRecords = [
    { id: 1, plan: "方案一", startDate: '2023/5/1', endDate:"2023/6/1", status:"認養中", amount: 100 },
    { id: 2, plan: "方案二", startDate: '2022/5/1', endDate:"2022/6/1", status:"認養結束", amount: 100 },
    { id: 3, plan: "方案三", startDate: '2021/5/1', endDate:"2021/6/1", status:"認養結束", amount: 100 },
    { id: 4, plan: "方案四", startDate: '2020/5/1', endDate:"2020/6/1", status:"認養結束", amount: 100 },
    { id: 5, plan: "方案四", startDate: '2019/5/1', endDate:"2019/6/1", status:"認養結束", amount: 100 },
    { id: 6, plan: "方案四", startDate: '2018/5/1', endDate:"2018/6/1", status:"認養結束", amount: 100 },
];

// GET 該動物所有認養中認養人，不重複，不包含自己
// 若無紀錄，回傳空陣列
const adopters = [
    { id: 1, name: "AA" },
    { id: 2, name: "BB" },
    { id: 3, name: "CC" },
    { id: 4, name: "DD" },
    { id: 5, name: "EE" },
    { id: 6, name: "FF" },
];

export default function AnimalsInfoPage() {
  // 取得最新一筆 adoptionRecords 的 status
   const [firstAdoptionStatus, setFirstAdoptionStatus] = useState(null);
   useEffect(() => {
     if (adoptionRecords.length > 0) {
       setFirstAdoptionStatus(adoptionRecords[0].status);
     }
   }, [adoptionRecords]);

  return (
    <Layout>
      <ThemeProvider theme={brownTheme}>
        <Box sx={{ textAlign: 'center' }}>
          {/* 動物資訊區塊 */}
          <AniInfo animal={animal} firstAdoptionStatus={firstAdoptionStatus}/>
          {/* 認養紀錄區塊 */}
          <AdoptRecord adoptionRecords={adoptionRecords}/>
          {/* 其他認養人列表區塊 */}
          <OtherAdopters adopters={adopters} adoptionRecords={adoptionRecords}/>
          {/* 了解認養流程連結 & 加入按鈕 */}
          <JoinBtns firstAdoptionStatus={firstAdoptionStatus}/>
        </Box>
      </ThemeProvider>
    </Layout>
  )
}