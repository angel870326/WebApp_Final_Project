import React, { useEffect, useState } from 'react';
// components
import { Grid, Typography } from '@mui/material'
import { Card, CardHeader, Avatar, CardContent } from '@mui/material';
import HomeSectionLayout from './HomeSectionLayout'
import PetsIcon from '@mui/icons-material/Pets';
// style
import { sectionCard, cardTitle, cardContent } from '@/styles/jss/components/HomePage/homeStyle'
import { brownColor } from "@/styles/jss/animal-cloud-adoption.js";

export default function HomeAdopter() {

  // Call API
  const [isLoading, setLoading] = useState(true);
  const [shelters, setShelters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getIndexShelterInfo');
        const jsonData = await response.json();
        setShelters(jsonData);
      } catch (error) { }
      setLoading(false);
    }
    fetchData();
  }, []);
  // const shelters = [
  //   { id: 1, name: "name1", animalNum: 300 },
  //   { id: 2, name: "name2", animalNum: 200 },
  //   { id: 3, name: "name3", animalNum: 100 },
  // ]

  if (isLoading) {
    return;
  } else {
    return (
      <HomeSectionLayout sectionTitle={"大型收容所"} moreLink={"/shelters"}>
        {/* List */}
        <Grid container alignItems="center" justifyContent="center" spacing={0}>
          {shelters.map((item) => (
            <Grid item key={item.id} xs={10} sm={6} md={4}>
              <Card sx={sectionCard}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ width: 50, height: 50, bgcolor: brownColor }} aria-label="recipe">
                      <PetsIcon fontSize='large' />
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
                    當前收容動物數：{item.animalNum}
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