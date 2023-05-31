import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import { ThemeProvider } from '@mui/material/styles';
import AniInfo from '@/components/AnimalInfoPage/AniInfo';
import AdoptRecord from '@/components/AnimalInfoPage/AdoptRecord';
import OtherAdopters from '@/components/AnimalInfoPage/OtherAdopters';
import JoinBtns from '@/components/AnimalInfoPage/JoinBtns';
import { useRouter } from 'next/router';

export default function AnimalsInfoPage() {

  // Call API
  const router = useRouter();
  const { a_id } = router.query;
  const [isLoading, setLoading] = useState(true);
  // GET 單一 Animal (所有)資訊
  const [animal, setAnimal] = useState({});
  // GET 此使用者和此動物的所有認養紀錄，由新到舊排序
  // 若無紀錄，回傳空陣列
  const [adoptionRecords, setAdoptionRecords] = useState([]);
  // GET 該動物所有認養中認養人，不重複，不包含自己
  // 若無紀錄，回傳空陣列
  const [adopters, setAdopters] = useState([]);
  useEffect(() => {
    if (a_id) {
      async function fetchData() {
        try {
          const response = await fetch(`/api/getAnimalInfo/${a_id}`);
          const jsonData = await response.json();
          setAnimal(jsonData);
        } catch (error) { }
        try {
          // use memberId = 1 just for testing
          const response = await fetch(`/api/getAnimalDonateRecord/${a_id}/1`);
          const jsonData = await response.json();
          setAdoptionRecords(jsonData);
        } catch (error) { }
        try {
          // use memberId = 1 just for testing
          const response = await fetch(`/api/getAnimalAdopter/${a_id}/1`);
          const jsonData = await response.json();
          setAdopters(jsonData);
        } catch (error) { }
        setLoading(false);
      }
      fetchData();
    }
  }, [a_id]);
  // const animal = { id: 22, name: '小黑', sex: "母", type: "巴哥犬", brithYear: 2020, personality: "活潑", appearance: "黑色、垂耳", shelter_id: 1 };
  // const adoptionRecords = [{ id: 1, plan: "方案一", startDate: '2023/5/1', endDate: "2023/6/1", status: "認養中", amount: 100 },];
  // const adopters = [{ id: 1, name: "AA" },];

  // 取得最新一筆 adoptionRecords 的 status
  const [firstAdoptionStatus, setFirstAdoptionStatus] = useState(null);
  useEffect(() => {
    if (adoptionRecords.length > 0) {
      setFirstAdoptionStatus(adoptionRecords[0].status);
    }
  }, [adoptionRecords]);

  if (isLoading) {
    return;
  } else {
    return (
      <Layout>
        <ThemeProvider theme={brownTheme}>
          <Box sx={{ textAlign: 'center' }}>
            {/* 動物資訊區塊 */}
            <AniInfo animal={animal} firstAdoptionStatus={firstAdoptionStatus} />
            {/* 認養紀錄區塊 */}
            <AdoptRecord adoptionRecords={adoptionRecords} />
            {/* 其他認養人列表區塊 */}
            <OtherAdopters adopters={adopters} adoptionRecords={adoptionRecords} />
            {/* 了解認養流程連結 & 加入按鈕 */}
            <JoinBtns firstAdoptionStatus={firstAdoptionStatus} animalId={a_id} />
          </Box>
        </ThemeProvider>
      </Layout>
    );
  }

}