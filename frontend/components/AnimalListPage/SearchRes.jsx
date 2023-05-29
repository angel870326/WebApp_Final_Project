import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from './AniCard';

export default function SearchRes({ searchCriteria }) {

  // Call API
  const [isLoading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getAnimalList');
        const jsonData = await response.json();
        setAnimals(jsonData);
      } catch (error) { }
      setLoading(false);
    }
    fetchData();
  }, []);
  // NEW animal array
  // const animals = [{ id: 1, name: 'name1', type: '狗', sex: '公', birth_year: '2020', area: '北部', shelter: '臺北市動物之家', sheltered_date: '2020-04-06 00:00:00.000000', numMember: '1' },];
  // OLD animal array
  // const animals = [{ id: 1, name: 'name1', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },];

  if (isLoading) {
    return;
  } else {

    // types, age, sex, area filters
    const filteredAnimals = animals.filter(animal => {

      // type filter
      if (searchCriteria.types) {
        if (searchCriteria.types === '其他') {
          if (animal.type === '貓' || animal.type === '狗') {
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
        const animalAge = currentYear - animal.birth_year;

        if (searchCriteria.age === '5+') {
          if (animalAge < 5) {
            return false;
          }
        } else {
          const [minAge, maxAge] = searchCriteria.age.split('-');
          if (minAge && animalAge < parseInt(minAge)) {
            return false;
          }
          if (maxAge && animalAge > parseInt(maxAge)) {
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

}