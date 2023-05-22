import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import SheCard from './SheCard';

// NEW shelter array: {id, name, area, address, numAnimal}
const shelters = [
    { id: 1, name: '臺北市動物之家', area: '北部', address: '我是一個地址，我是長字串，我要堅強', numAnimal: '5' },
    { id: 2, name: '新北市新店區公立動物之家', area: '北部', address: 'myAddress', numAnimal: '5' },
    { id: 3, name: '臺東縣動物收容中心', area: '東部', address: '臺東縣臺東市中華路4段999巷600號', numAnimal: '10' },
    { id: 4, name: 'name4', area: '中部', address: 'myAddress', numAnimal: '0' },
    { id: 5, name: 'name5', area: '南部', address: 'myAddress', numAnimal: '7' },
    { id: 6, name: 'name6', area: '南部', address: 'myAddress', numAnimal: '2' },
    
];

function SearchRes({ searchCriteria }) {
    
    // OLD shelter array: {id, name, address, numAnimal}
    /*
    const [shelters, setShelters] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/getShelterList');
                const jsonData = await response.json();
                setShelters(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    */

    // NEW shelter array 也可以放這裡

    // area filters
    const filteredShelters = shelters.filter(shelter => {
        if (searchCriteria.area && shelter.area !== searchCriteria.area) {
            return false;
        }
        return true;
    });

    // numAnimal sort
    const sortedShelters = filteredShelters.sort((a, b) => {
        if (searchCriteria.sortBy === 'numAnimal') {
            const numAnimalA = parseInt(a.numAnimal);
            const numAnimalB = parseInt(b.numAnimal);
            return numAnimalB - numAnimalA;
        }
        return 0;
    });


    return (
        <div>
            <h2 style={title}>搜尋結果</h2>
            <div style={divLine} />
            <SheCard shelters={sortedShelters} />
        </div>
    );

}
export default SearchRes;
