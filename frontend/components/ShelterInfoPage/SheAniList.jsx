import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from '../AnimalListpage/AniCard';
// next components
import { useRouter } from 'next/router';

function SheAniList() {

    const router = useRouter();
    const { s_id } = router.query;

    // 後端利用 s_id 得到相對應的 animals [{id, name, shelter, type, birth_year, numMember},]
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                // use shelterId = 1 just for testing
                const response = await fetch('/api/getShelterAnimal/1');
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
            {/* test s_id */}
            <h1>[test] <code>s_id</code> in ShelterInfoPage/SheAniList: {s_id}</h1>

            <h2 style={title}>收容所內動物列表</h2>
            <div style={divLine} />
            <AniCard animals={animals} />
        </div>
    );
}
export default SheAniList;
