import Layout from '@/components/Layout'
import React, { useState } from 'react';
import { Box, Button, Link, Grid, Typography, Container, List, ListItem, ListItemText, ListItemSecondaryAction, FormControl, InputLabel, MenuItem, Select, Collapse} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { title, content, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import EditIcon from '@mui/icons-material/Edit';

// GET 所有方案所有資訊 
const options = [
  { id: 1, label: '方案一', price: 100, duration: 1 },
  { id: 2, label: '方案二', price: 270, duration: 3 },
  { id: 3, label: '方案三', price: 550, duration: 6 },
  { id: 4, label: '方案四', price: 1000, duration: 12 },
];

// GET 單一 User (所有)資訊
const user = { id: 33, email: 'b08705037@ntu.edu.tw', anonymous: true};

// GET 單一 Animal (所有)資訊
const animal = { id: 22, name: '小黑'};

export default function joinAdopt() {
  // 選擇方案
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
      setSelectedOption(event.target.value);
      if (!selectedOption){
        setChecked((prev) => !prev);
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const plan = selectedOption;
    
    if (!selectedOption) {
    // 使用者沒有選擇方案，發出警告 Alert
    alert('請選擇方案！');
    } else {
    // 寄發email
    alert('匯款通知信件已寄出！\n請至您的 email 確認信件，\n並於時間內完成匯款。');

    // 計算方案起訖日期
    const today = new Date();
    const currentDate = today.toLocaleDateString();
    const futureDate = new Date(today.getFullYear(), today.getMonth() + plan.duration, today.getDate());
    const endDate = futureDate.toLocaleDateString();

    // 回傳
    console.log({
        amount: plan.price,
        donatePeriod: plan.duration,
        startDate: currentDate,
        endDate: endDate,
        planId: plan.id,
        accountId: user.id,
        animalId: animal.id,
    });

    // 導向動物資訊頁面
    window.location.href = '/animals/animalsInfo';
    }
  };

  return (
    <Layout>
        <ThemeProvider theme={brownTheme}>
          <div style={content}>
              <Container component="main" maxWidth="xs">
                  <Box
                  sx={{
                      marginTop: 8,
                      alignItems: 'center',
                      marginBottom: 8
                  }}
                  >
                  <h2 style={title}>
                      加入{animal.name}的認養計畫！
                  </h2>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <List container spacing={2}>
                            <ListItem>
                                <ListItemText primary="帳號："/>
                                <ListItemSecondaryAction>
                                    {user.id}
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="認養動物收容編號："/>
                                <ListItemSecondaryAction>
                                    {animal.id}
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="捐款方式："/>
                                <ListItemSecondaryAction>
                                    <div>
                                      {user.anonymous ? (
                                        <>匿名捐款 <Link href="/edit"><EditIcon sx={{ fontSize:14 }} /></Link></>
                                      ) : (
                                        <>具名捐款 <Link href="/edit"><EditIcon sx={{ fontSize:14 }} /></Link></>
                                      )}
                                    </div>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="認養方案："/>
                                <ListItemSecondaryAction>
                                <FormControl sx={{minWidth: 100 }}>
                                    <InputLabel id="option-label">方案</InputLabel>
                                    <Select
                                    labelId="option-label"
                                    id="option"
                                    value={selectedOption}
                                    label="Option"
                                    onChange={handleChange}
                                    required
                                    >
                                    {options.map((option) => (
                                        <MenuItem key={option.id} value={option}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Collapse in={checked}>
                              <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                              <Typography sx={{ m: 1, border: '1px solid gray', padding: '1rem', display: selectedOption ? 'block' : 'none' }} borderRadius="10px">
                                  認養金額: ${selectedOption ? selectedOption.price : 'none'}
                                  <br/>
                                  認養時長: {selectedOption ? selectedOption.duration : 'none'} 個月
                              </Typography>
                              </ListItem>
                            </Collapse>
                        </List>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                        >
                        加入認養計畫
                        </Button>
                        <Grid container justifyContent="center" sx={{ mt: 1 }}>
                          <Grid item sx={{ textAlign: 'center' }}>
                              點擊「加入認養計畫」後，<br />
                              我們會將匯款資訊寄送至您的信箱，<br />
                              請於 3 天內完成匯款。<br />
                              等待審查完畢後，即可成功認養{animal.name}！<br />
                          </Grid>
                          <Grid item sx={{ textAlign: 'center', mt: 1 }}>
                            <Link href="/faq">
                              進一步了解認養流程
                            </Link>
                          </Grid>
                        </Grid>
                    </Box>
                  </Box>
              </Container>
            </div>
        </ThemeProvider>
    </Layout>
  )
}