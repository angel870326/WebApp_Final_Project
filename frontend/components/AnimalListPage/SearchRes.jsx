import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from './AniCard';

export default function SearchRes() {

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
    // const animals = [{ id: 1, name: 'name1', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },];

    if (isLoading) {
        return;
    } else {
        return (
            <div>
                <h2 style={title}>搜尋結果</h2>
                <div style={divLine} />
                <AniCard animals={animals} />
            </div>
        );
    }

}