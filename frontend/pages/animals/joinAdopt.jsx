import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react';
import { Box, Button, Link, Grid, Typography, Container, List, ListItem, ListItemText, ListItemSecondaryAction, FormControl, InputLabel, MenuItem, Select, Collapse } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { title, plan, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

// 送出表單
const handleSubmit = async () => {

  event.preventDefault();

  // Form data
  const formData = new FormData(event.target);
  const jsonData = {};
  for (let [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  // Data Validation
  if (jsonData.option === "") {
    alert('請選擇方案！');
    return;
  }

  // Call API
  // use memberId = 1 just for testing
  const response = await fetch(`/api/addDonation/1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  if (response.ok) {
    alert('匯款通知信件已寄出！\n請至您的 email 確認信件，\n並於時間內完成匯款。');
    window.location.href = `/animals/animalsInfo?a_id=${jsonData.animalId}`;
  } else {
    alert("系統錯誤");
  }

  return;

};

export default function JoinAdopt() {

  // 選擇方案
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionLabel(event.target.value.label);
    if (!selectedOption) {
      setChecked((prev) => !prev);
    }
  };

  // Call API
  const router = useRouter();
  const { a_id } = router.query;
  const [isLoading, setLoading] = useState(true);
  // GET 所有方案所有資訊 
  const [options, setOptions] = useState({});
  // GET 單一 User (所有)資訊
  const [user, setUser] = useState({});
  // GET 單一 Animal (所有)資訊
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    if (a_id) {
      async function fetchData() {
        try {
          // use memberId = 1 just for testing
          const response = await fetch(`/api/getJoiningDonatePlan/${a_id}/1`);
          const jsonData = await response.json();
          setOptions(jsonData.options);
          setUser(jsonData.user);
          setAnimal(jsonData.animal);
        } catch (error) { }
        setLoading(false);
      }
      fetchData();
    }
  }, [a_id]);
  // const options = [{ id: 1, label: '方案一', price: 100, duration: 1 },];
  // const user = { id: 33, email: 'b08705037@ntu.edu.tw', anonymous: true };
  // const animal = { id: 22, name: '小黑' };

  if (isLoading) {
    return;
  } else {
    return (
      <Layout>
        <ThemeProvider theme={brownTheme}>
          <div style={plan}>
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
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate sx={{ mt: 1 }}
                >
                  <List container spacing={2}>
                    <ListItem>
                      <ListItemText primary="帳號：" />
                      <ListItemSecondaryAction>
                        {user.id}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="認養動物收容編號：" />
                      <ListItemSecondaryAction>
                        {animal.id}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="捐款方式：" />
                      <ListItemSecondaryAction>
                        <div>
                          {user.anonymous ? (
                            <>匿名捐款 <Link href="/account/edit"><EditIcon sx={{ fontSize: 14 }} /></Link></>
                          ) : (
                            <>具名捐款 <Link href="/account/edit"><EditIcon sx={{ fontSize: 14 }} /></Link></>
                          )}
                        </div>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="認養方案：" />
                      <ListItemSecondaryAction>
                        <FormControl sx={{ minWidth: 100 }}>
                          <InputLabel id="option-label">方案</InputLabel>
                          <Select
                            labelId="option-label"
                            id="option"
                            name="option"
                            value={selectedOptionLabel}
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
                          <br />
                          認養時長: {selectedOption ? selectedOption.duration : 'none'} 天
                        </Typography>
                      </ListItem>
                    </Collapse>
                  </List>
                  <input name='animalId' type='hidden' value={a_id}></input>
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
    );
  }

}