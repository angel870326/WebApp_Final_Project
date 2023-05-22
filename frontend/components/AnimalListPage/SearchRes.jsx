import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from './AniCard';

function SearchRes() {

    // animal array: {id, name, shelter, type, birth_year, numMember}
    // 之後 +「查看更多」link? key-id?
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
    // const animals = [
    //     { id: 1, name: 'name1', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 2, name: 'name2', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 3, name: 'name3', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 4, name: 'name4', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 5, name: 'name5', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 6, name: 'name6', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 7, name: 'name7', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    //     { id: 8, name: 'name8', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    // ];

    return (
        <div>
            <h2 style={title}>搜尋結果</h2>
            <div style={divLine} />
            <AniCard animals={animals} />
        </div>
    );

}
export default SearchRes;
