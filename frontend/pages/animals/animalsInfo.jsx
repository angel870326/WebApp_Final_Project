import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react';
import { Typography, Divider, Grid, Box, Switch, Card, CardContent, Link, Button } from '@mui/material';

// GET 單一 Animal (所有)資訊
const animal = { id: 22, name: '小黑', sex: "母", type: "巴哥犬", brithYear: 2020, personality: "活潑", appearance: "嬌小", shelter_id: 1};

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
   // 轉換圖片與影片
   const [isImageOne, setIsImageOne] = useState(true);
   const handleImageToggle = () => {
     setIsImageOne((prevValue) => !prevValue);
   };
 
   // 取得最新一筆 adoptionRecords 的 status
   const [firstAdoptionStatus, setFirstAdoptionStatus] = useState(null);
   useEffect(() => {
     if (adoptionRecords.length > 0) {
       setFirstAdoptionStatus(adoptionRecords[0].status);
     }
   }, [adoptionRecords]);

  return (
    <Layout>
      <Box sx={{ textAlign: 'center' }}>
        {/* 動物資訊區塊 */}
        <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 1 }}>
          動物資訊
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          {animal.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" component="p">
              收容編號: {animal.id}
            </Typography>
            <Typography variant="body1" component="p">
              品種: {animal.type}
            </Typography>
            <Typography variant="body1" component="p">
              性別: {animal.sex}
            </Typography>
            <Typography variant="body1" component="p">
              出生年: {animal.brithYear}年
            </Typography>
            <Typography variant="body1" component="p">
              個性: {animal.personality}
            </Typography>
            <Typography variant="body1" component="p">
              外型: {animal.appearance}
            </Typography>
            <Typography variant="body1" component="p">
              收容處: {animal.shelter_id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
              {isImageOne ? (
                  <img
                  src={process.env.PUBLIC_URL+'/pic/'+'animal-image-1.jpg'}
                  alt="動物圖片"
                  style={{ height: 200 }}
                  />
              ) : (
                  firstAdoptionStatus === "認養中" ? (
                    <iframe
                    width="50%"
                    height="200"
                    src="https://www.youtube.com/embed/ZwtPgDLexgE"
                    title="YouTube video player"
                    allowFullScreen
                    ></iframe>
                  ) : firstAdoptionStatus === "認養結束" ? (
                    <Typography variant="body1" component="p" style={{
                      height: 177,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      重新加入認養計畫以解鎖影片！
                    </Typography>
                  ) : firstAdoptionStatus === "審核中" ? (
                    <Typography variant="body1" component="p" style={{
                      height: 177,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      等待審查完成即可觀看影片！
                    </Typography>
                  ) : (
                    <Typography variant="body1" component="p" style={{
                      height: 177,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      加入認養計畫以解鎖影片！
                    </Typography>
                  )
              )}
            <br/>
            <Switch checked={isImageOne} onChange={handleImageToggle} />
          </Grid>
        </Grid>

        {/* 認養紀錄區塊 */}
        {adoptionRecords.length > 0 && (
          <>
          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
              我的認養紀錄
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {adoptionRecords.map((record) => (
              <Card key={record.id} sx={{ width: 200, mx: 2, my: 2, borderRadius: '20px' }}>
                  <CardContent>
                  {/* 顯示認養紀錄的基本資訊 */}
                  <Typography variant="body1" component="p">
                      認養狀態: {record.status}
                  </Typography>
                  <Typography variant="body1" component="p">
                      認養方案: {record.plan}
                  </Typography>
                  <Typography variant="body1" component="p">
                      認養期間: {record.startDate}-{record.endDate}
                  </Typography>
                  <Typography variant="body1" component="p">
                      認養金額: ${record.amount}
                  </Typography>
                  {/* ...其他認養紀錄的資訊 */}
                  </CardContent>
              </Card>
              ))}
          </Box>
          </>
        )}

        {/* 其他認養人列表區塊 */}
        {adopters.length > 0 && (
          <>
            <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            {adoptionRecords.length > 0 ? "其他認養人列表" : "認養人列表"}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {adopters.map((adopter) => (
                <Card key={adopter.id} sx={{ width: 100, height: 50, mx: 2, my: 2, borderRadius: '20px' }}>
                  <CardContent>
                    {/* 顯示認養人的基本資訊 */}
                    <Link href={`/adoptersInfo/${adopter.id}`} color="inherit" underline="none">
                      <Typography variant="body1" component="p">
                        {adopter.name}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </>
        )}

        {/* 了解認養流程連結 */}
        {firstAdoptionStatus !== "審核中" && (
          <>
          <Typography variant="body1" component="p">
              <Link href="/faq">了解認養流程</Link>
          </Typography>
          {/* 加入認養計畫按鈕 */}
          {firstAdoptionStatus === "認養中" ? (
            <Button href="/ExtendAdopt" variant="contained" color="primary">
              延長認養計畫
            </Button>
          ) : (
            <Button href="/JoinAdopt" variant="contained" color="primary">
              加入認養計畫
            </Button>
          )}
          </>
        )}
      </Box>
    </Layout>


  )
}