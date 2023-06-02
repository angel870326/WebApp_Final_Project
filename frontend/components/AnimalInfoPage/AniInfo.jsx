import React, { useState } from 'react';
import { title, content, divLine } from "@/styles/jss/animal-cloud-adoption.js";
import { Typography, Grid, Switch, List, ListItem } from '@mui/material';

export default function AniInfo({ animal, firstAdoptionStatus }) {

  // 轉換圖片與影片
  const [isImageOne, setIsImageOne] = useState(true);
  const handleImageToggle = () => {
    setIsImageOne((prevValue) => !prevValue);
  };

  return (
    <div>
      {/* 動物資訊區塊 */}
      <h1 style={title}> 動物資訊 </h1>
      <div style={content}>
        <h2 style={title}> {animal.name} </h2>
        <div style={divLine} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container justifyContent="center">
              <List>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    收容編號： {animal.id}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    品種： {animal.type}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    性別： {animal.sex}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    出生年： {animal.brithYear}年
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    個性： {animal.personality}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    外型： {animal.appearance}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                    收容處： {animal.shelter_id}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <br />
            {isImageOne ? (
              <img
                src={'/animals/' + animal.id + '.jpg'}
                alt={animal.name}
                style={{ height: 200, width: 300, objectFit: 'cover' }}
              />
            ) : (
              firstAdoptionStatus === "認養中" ? (
                <iframe
                  height="200"
                  src="https://www.youtube.com/embed/VQTmS5izrzI"
                  title="YouTube video player"
                  allowFullScreen
                  sx={{ textAlign: 'center' }}
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
            <br />
            <Switch checked={isImageOne} onChange={handleImageToggle} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
