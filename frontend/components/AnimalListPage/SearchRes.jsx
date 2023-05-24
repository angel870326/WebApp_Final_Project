import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from './AniCard';

// NEW animal array: { id, name, type, sex, birth_year, area, shelter, sheltered_date, numMember }
const animals = [
    { id: 1, name: 'name1', type: '狗', sex: '公', birth_year: '2020', area: '北部', shelter: '臺北市動物之家', sheltered_date: '2020-04-06 00:00:00.000000', numMember: '1' },
    { id: 2, name: 'name2', type: '貓', sex: '母', birth_year: '2021', area: '北部', shelter: '新北市新店區公立動物之家', sheltered_date: '2021-04-06 00:00:00.000000', numMember: '2' },
    { id: 3, name: 'name3', type: '鸚鵡', sex: '公', birth_year: '2022', area: '東部', shelter: '臺東縣動物收容中心', sheltered_date: '2023-05-06 00:00:00.000000', numMember: '5' },
    { id: 4, name: 'name4', type: '狗', sex: '公', birth_year: '2023', area: '南部', shelter: 'my shelter', sheltered_date: '2023-04-06 00:00:00.000000', numMember: '10' },
    { id: 5, name: 'name5', type: '貓', sex: '公', birth_year: '2017', area: '中部', shelter: 'my shelter', sheltered_date: '2020-04-06 00:00:00.000000', numMember: '3' },
    { id: 6, name: 'name6', type: '狗', sex: '母', birth_year: '2018', area: '中部', shelter: 'my shelter', sheltered_date: '2019-04-06 00:00:00.000000', numMember: '5' },
    { id: 7, name: 'name7', type: '貓', sex: '公', birth_year: '2016', area: '南部', shelter: 'my shelter', sheltered_date: '2018-04-06 00:00:00.000000', numMember: '2' },
    { id: 8, name: 'name8', type: '狗', sex: '母', birth_year: '2001', area: '東部', shelter: 'my shelter', sheltered_date: '2007-04-06 00:00:00.000000', numMember: '11' },
];

function SearchRes({ searchCriteria }) {

    // OLD animal array: {id, name, shelter, type, birth_year, numMember}
    /*
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/getAnimalList');
                const jsonData = await response.json();
                setAnimals(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    */

    // NEW animal array 也可以放這裡
    

    // types, age, sex, area filters
    const filteredAnimals = animals.filter(animal => {

    // type filter
    if (searchCriteria.types) {
      if(searchCriteria.types === '其他'){
        if(animal.type === '貓' || animal.type === '狗'){
          return false;
        }
      } else if (animal.type !== searchCriteria.types) {
        return false;
      }
    }

    // age filter
    if (searchCriteria.age) {
      const now = new Date();
      const currentYear = now.getFullYear();
      const animalAge = currentYear - parseInt(animal.birth_year);

      if(searchCriteria.age === '6+'){
        if(animalAge < 6){
          return false;
        }
      }else{
        const [minAge, maxAge] = searchCriteria.age.split('-');
        if (minAge && animalAge < parseInt(minAge)) {
          return false;
        }
        if (maxAge && animalAge >= parseInt(maxAge)) {
          return false;
        }
      }
    }

    // sex filter
    if (searchCriteria.sex && animal.sex !== searchCriteria.sex) {
      return false;
    }

    // area filter
    if (searchCriteria.area && animal.area !== searchCriteria.area) {
      return false;
    }

    return true;
  });

  // sheltered_date, numMember sort
  const sortedAnimals = filteredAnimals.sort((a, b) => {

    if (searchCriteria.sortBy === 'sheltered_date') {
      const dateA = a.sheltered_date.split(' ')[0];
      const dateB = b.sheltered_date.split(' ')[0];
      
      if (dateA > dateB) {
        return -1; // 交換位置
      } else if (dateA < dateB) {
        return 1; // 不交換位置
      } else {
        return 0; // 不交換位置
      }
    }

    if (searchCriteria.sortBy === 'numMember') {
      const numMemberA = parseInt(a.numMember);
      const numMemberB = parseInt(b.numMember);
      return numMemberA - numMemberB;
    }

    return 0;
  });

  return (
    <div>
      <h2 style={title}>搜尋結果</h2>
      <div style={divLine} />

      <AniCard animals={sortedAnimals} />
    </div>
  );

}
export default SearchRes;
