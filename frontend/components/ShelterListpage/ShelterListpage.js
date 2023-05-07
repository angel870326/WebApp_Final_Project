import React from 'react'
// style
import { title, content } from "@/styles/jss/components/AnimalListpage/generalStyle";
// my components
import SearchCond from '../ShelterListpage/SearchCond'
import SearchRes from '../ShelterListpage/SearchRes'

function Home() {

      return (
      <div>
        <h1 style={title}> 收容所列表 </h1>

        <div style={content}>
          <SearchCond />
        </div>
        <div style={content}>
          <SearchRes />
        </div>
        
      </div>
      );
     
}

export default Home
