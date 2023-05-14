import React from 'react'
// style
import { title, content } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import SearchCond from './SearchCond'
import SearchRes from './SearchRes'

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
