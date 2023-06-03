import React, { useState }  from 'react'
// style
import { title, content } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import SearchCond from './SearchCond'
import SearchRes from './SearchRes'

export default function ShelterListPage() {
  const [searchCriteria, setSearchCriteria] = useState({ area: '', sortBy: ''});

  const handleSearch = (newSearchCriteria) => {
    setSearchCriteria(newSearchCriteria);
  };
  
  return (
    <div>
      <h1 style={title}> 收容所列表 </h1>

      <div style={content}>
        <SearchCond onSearch={handleSearch} />
      </div>
      <div style={content}>
        <SearchRes searchCriteria={searchCriteria} />
      </div>
    
    </div>
  );
     
}