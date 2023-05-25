import Layout from '@/components/Layout'
import ImageContent from '@/components/HomePage/ImageContent'
import AboutUs from '@/components/HomePage/AboutUs'
import HomeAnimal from '@/components/HomePage/HomeAnimal'
import HomeAdopter from '@/components/HomePage/HomeAdopter'
import HomeShelter from '@/components/HomePage/HomeShelter'
import { Box } from '@mui/material';


function ImageBackground() {
  return(
    <Box
      sx={{
        backgroundImage: 'url(bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: "grid",
        placeItems: "top",
        width: '100%',
        height: '100vh',
        padding: 0,
        margin: 0
      }}
    >
      <ImageContent />
    </Box>
  );
}


export default function Home() {

  return (
  //   <>
  //   <CssBaseline />

  //   <Box
  //   sx={{
  //     backgroundImage: 'url(bg.jpg)',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundPosition: 'center',
  //     display: "grid",
  //     placeItems: "center",

  //     width: '100%',
  //     height: '100vh',
  //     padding: 0,
  //     margin: 0
  //   }}
  // >
  //   where is my words
  // </Box>
  // </>
    <Layout
      imageBackground={<ImageBackground />}
      >
      <AboutUs />
      <HomeAnimal />
      <HomeAdopter />
      <HomeShelter />
    </Layout>
  )
}