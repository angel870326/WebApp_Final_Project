import Layout from '@/components/Layout'
import AboutUs from '@/components/HomePage/AboutUs'
import HomeAnimal from '@/components/HomePage/HomeAnimal'
import HomeAdopter from '@/components/HomePage/HomeAdopter'
import HomeShelter from '@/components/HomePage/HomeShelter'

export default function Home() {

  return (
    <Layout>
      <AboutUs />
      <HomeAnimal />
      <HomeAdopter />
      <HomeShelter />
    </Layout>
  )
}