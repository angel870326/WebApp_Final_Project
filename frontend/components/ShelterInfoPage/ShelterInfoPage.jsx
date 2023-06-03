import React from 'react'
//style
import { title, content } from "@/styles/jss/animal-cloud-adoption.js";
//my components
import SheName from './SheName'
import SheAniList from './SheAniList'

export default function ShelterInfoPage() {
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