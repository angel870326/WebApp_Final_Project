import React from 'react'
//style
import { title, brownTheme, content } from "@/styles/jss/components/AnimalListpage/generalStyle";
//my components
import SheName from './SheName'
import SheAniList from './SheAniList'

function Home() {
  return (
    <div>
      <h1 style={title}> 收容所資訊 </h1>
      <div style={content}>
        <SheName />
      </div>
      <div style={content}>
        <SheAniList />
      </div>
    </div>
  );
}

export default Home
