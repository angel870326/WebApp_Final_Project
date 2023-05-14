import React from 'react';
import { title, divLine } from "@/styles/jss/components/AnimalInfoPage/infoPageStyle";
import { Typography, Box, Card, CardContent} from '@mui/material';


export default function AdoptRecord({adoptionRecords}) {
  return (
    <div>
        {adoptionRecords.length > 0 && (
          <div>
          <h2 style={title}> 我的認養紀錄 </h2>
          <div style={divLine}/>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {adoptionRecords.map((record) => (
              <Card key={record.id} elevation={0} sx={{ width: 200, mx: 2, my: 2, borderRadius: '20px', ':hover': {
                boxShadow: 5,
                transition: "transform 0.15s ease-in-out",
                transform: "scale3d(1.05, 1.05, 1)"
              } }}>
                  <CardContent>
                  {/* 顯示認養紀錄的基本資訊 */}
                  <Typography variant="body1" component="p" sx={{ mt: 0.5, mb: 0.5, textAlign: 'left' }}>
                      認養狀態: {record.status}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mt: 0.5, mb: 0.5, textAlign: 'left' }}>
                      認養方案: {record.plan}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mt: 0.5, mb: 0.5, textAlign: 'left' }}>
                      認養期間:<br/>{record.startDate} - {record.endDate}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mt: 0.5, mb: 0.5, textAlign: 'left' }}>
                      認養金額: ${record.amount}
                  </Typography>
                  {/* ...其他認養紀錄的資訊 */}
                  </CardContent>
              </Card>
              ))}
          </Box>
          </div>
        )}
    </div>
  )
}
