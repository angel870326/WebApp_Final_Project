import React, { useEffect, useState } from 'react';
// components
import { Grid, Typography } from '@mui/material'
import { Card, CardMedia, CardContent } from '@mui/material';
import HomeSectionLayout from './HomeSectionLayout'
// style
import { sectionCard, cardTitle } from '@/styles/jss/components/HomePage/homeStyle'

export default function HomeAnimal() {

  // Call API
  const [isLoaded, setLoaded] = useState(false);
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getIndexAnimalInfo');
        const jsonData = await response.json();
        setAnimals(jsonData);
      } catch (error) { }
      setLoaded(true);
    }
    fetchData();
  }, []);
  // const animals = [
  //   { id: 1, name: "name1" },
  //   { id: 2, name: "name2" },
  //   { id: 3, name: "name3" },
  // ]

  return (
    <>
      {isLoaded && (
        <HomeSectionLayout sectionTitle={"新進的動物們"} moreLink={"/animals"}>
          {/* List */}
          <Grid container alignItems="center" justifyContent="center" spacing={0}>
            {animals.map((item) => (
              <Grid item key={item.id} xs={10} sm={6} md={4}>
                <Card sx={sectionCard}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="300"
                    image={`/animals/${item.id}.jpg`}
                  />
                  <CardContent>
                    <Typography sx={cardTitle}>
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </HomeSectionLayout>
      )}
    </>
  );

}