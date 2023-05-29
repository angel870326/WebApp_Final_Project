import React, { useEffect, useState } from 'react';
// components
import { Grid, Typography } from '@mui/material'
import { Card, CardHeader, Avatar, CardContent } from '@mui/material';
import HomeSectionLayout from './HomeSectionLayout'
import PersonIcon from '@mui/icons-material/Person';

// style
import { sectionCard, cardTitle, cardContent } from '@/styles/jss/components/HomePage/homeStyle'
import { brownColor } from "@/styles/jss/animal-cloud-adoption.js";

export default function HomeAdopter() {

  // Call API
  const [isLoading, setLoading] = useState(true);
  const [adopters, setAdopters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getIndexAdopterInfo');
        const jsonData = await response.json();
        setAdopters(jsonData);
      } catch (error) { }
      setLoading(false);
    }
    fetchData();
  }, []);
  // const adopters = [
  //   { id: 1, name: "name1", animalNum: 30 },
  //   { id: 2, name: "name2", animalNum: 20 },
  //   { id: 3, name: "name3", animalNum: 10 },
  // ]

  if (isLoading) {
    return;
  } else {
    return (
      <HomeSectionLayout sectionTitle={"認養人風雲榜"} moreLink={"/adopters"}>
        {/* List */}
        <Grid container alignItems="center" justifyContent="center" spacing={0}>
          {adopters.map((item) => (
            <Grid item key={item.id} xs={10} sm={6} md={4}>
              <Card sx={sectionCard}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ width: 50, height: 50, bgcolor: brownColor }} aria-label="recipe">
                      <PersonIcon fontSize='large' />
                    </Avatar>
                  }
                  title={
                    <Typography sx={cardTitle}>
                      {item.name}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography sx={cardContent}>
                    當前認養動物數：{item.animalNum}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </HomeSectionLayout>
    );
  }

}