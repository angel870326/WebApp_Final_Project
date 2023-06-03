import React from 'react';
// components
import { Grid, Typography, Card, CardMedia } from '@mui/material'
import { useTheme, useMediaQuery } from '@mui/material'
import HomeSectionLayout from './HomeSectionLayout'
import CustomCountUp from '@/components/HomePage/CustomCountUp'
// style
import { counterContent, item, counterTitle, counter, about, text, highlightText } from '@/styles/jss/components/HomePage/aboutUsStyle'

export default function AboutUs() {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <HomeSectionLayout sectionTitle={"關於我們"} moreLink={"/animals"}>
      {/* Counter */}
      {/* <Grid container spacing={0} sx={counterContent}>
          <Grid item xs={6} md={6} lg={6} sx={item}>
            <Typography sx={counterTitle}>累積收容動物</Typography>
            <CustomCountUp end={animalNum} style={{ ...counter, fontSize: isXs ? '70px' : '100px' }} />
          </Grid>
          <Grid item xs={6} md={6} lg={6} sx={item}>
            <Typography sx={counterTitle}>累積認養金額</Typography>
            <CustomCountUp end={amount} style={{ ...counter, fontSize: isXs ? '70px' : '100px' }} />
          </Grid>
        </Grid> */}

      {/* Description */}
      <Grid container sx={about} spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 1 }}>
            <CardMedia
              component="img"
              alt="Logo"
              // width="200"
              image="logo.png"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography sx={text}>
            在「動物雲認養」，我們相信每一個生命都應該被珍視，每一隻動物都值得愛與關懷。我們致力於為無家可歸的動物尋找永遠的家庭，同時提供您一個獨特且意義深遠的方式，讓您成為動物們的贊助者。<br />
            <br />
            我們明白，世界上有許多動物愛好者無法親自前往收容所或認養一隻動物，但他們仍然希望能夠為動物們做點什麼。在「動物雲認養」，您不需要親自前往收容所，也不需要承擔長期責任，即可成為動物們的贊助者。透過小額捐款，您可以為動物提供食物、醫療和關愛。您的捐款將直接用於支持收容所的運作，確保這些寶貝們得到最佳的照顧與關愛。
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={text}>
            我們引以為傲的特色是<a style={highlightText}>「即時直播」</a>功能，透過高清攝影機，您可以隨時隨地進入收容所的世界，與動物們進行互動。您不僅可以親眼見證這些可愛生命的活潑場景、玩耍時的歡樂，還可以感受到牠們與工作人員之間的深厚連結。這是一個溫馨且感人的體驗，一個讓您與動物們建立聯繫的獨特機會，不論身在何處，只要透過我們的網站，您就能與這些特殊的生命交流。<br />
            <br />
            我們的使命不僅僅是提供影片，更重要的是通過您的支持，讓這些動物們獲得更好的生活條件。您的每一筆捐款都將直接改變一隻動物的命運，使牠們在等待永久家庭的過程中，能夠過上幸福舒適的生活。每一個您所贊助的動物都有自己的故事，每一個小小的舉動都將為牠們的未來鋪上一條光明之路。<br />
            <br />
            我們邀請您成為「動物雲認養」的一份子，加入我們的大家庭，一同為這些無助的生命們帶來愛與溫暖。無論您是一個動物愛好者、一個忙碌的上班族還是一位善心人士，您都可以在「動物雲認養」找到屬於自己的角色。<br />
            <br />
            <a style={highlightText}>加入我們</a>，一起為動物們的未來努力，一起為建立更美好的世界作出貢獻！讓「動物雲認養」成為您寶貴善行的最佳伴侶，我們期待您的加入！<br />
          </Typography>
        </Grid>
      </Grid>
    </HomeSectionLayout>
  );

}