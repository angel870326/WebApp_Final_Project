import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import SheCard from './SheCard';

export default function SearchRes({ searchCriteria }) {

    // Call API
    const [isLoading, setLoading] = useState(true);
    const [shelters, setShelters] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/getShelterList');
                const jsonData = await response.json();
                setShelters(jsonData);
            } catch (error) { }
            setLoading(false);
        }
        fetchData();
    }, []);
    // NEW shelter array
    // const shelters = [{ id: 1, name: '臺北市動物之家', area: '北部', address: '我是一個地址，我是長字串，我要堅強', numAnimal: '5' },];
    // OLD shelter array
    // const shelters = [{ id: 1, name: 'name1', address: 'myAddress', numAnimal: 'my numAnimal' },];

    if (isLoading) {
        return;
    } else {

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

}