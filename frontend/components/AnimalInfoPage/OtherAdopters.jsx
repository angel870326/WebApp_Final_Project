import React from 'react';
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { Typography, Box, Card, CardContent, Link } from '@mui/material';
import { primaryColor } from "/styles/jss//animal-cloud-adoption.js";

export default function OtherAdopters({ adopters, adoptionRecords }) {
  return (
    <div>
      {adopters.length > 0 && (
        <>
          <h2 style={title}>
            {adoptionRecords.length > 0 ? "其他認養人列表" : "認養人列表"}
          </h2>
          <div style={divLine} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {adopters.map((adopter) => (
              <Card
                key={adopter.id}
                elevation={0}
                sx={{
                  width: 'auto',
                  height: 60,
                  mx: 2,
                  my: 2,
                  borderRadius: '20px',
                  ':hover': {
                    boxShadow: 5,
                    backgroundColor: primaryColor,
                    color: 'white',
                    transition: 'transform 0.15s ease-in-out',
                    transform: 'scale3d(1.05, 1.05, 1)',
                  },
                  display: 'flex',
                  alignItems: 'center', // 將文字垂直置中
                  justifyContent: 'center', // 將文字水平置中
                }}
              >
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                  {/* 顯示認養人的基本資訊 */}
                  <Link
                    href={`/adopters/adoptersInfo?m_id=${adopter.id}`}
                    target="_blank"
                    color="inherit"
                    underline="none"
                  >
                    <Typography variant="body1" component="p" sx={{ textAlign: 'center', mt: 1, }}>
                      {adopter.name}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </div>
  )
}