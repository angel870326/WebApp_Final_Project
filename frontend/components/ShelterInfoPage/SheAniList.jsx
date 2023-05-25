import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import AniCard from '../AnimalListpage/AniCard';
// next components
import { useRouter } from 'next/router';

export default function SheAniList() {

    // Call API
    const router = useRouter();
    const { s_id } = router.query;
    const [isLoading, setLoading] = useState(true);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        if (s_id) {
            async function fetchData() {
                try {
                    const response = await fetch(`/api/getShelterAnimal/${s_id}`);
                    const jsonData = await response.json();
                    setAnimals(jsonData);
                } catch (error) { }
                setLoading(false);
            }
            fetchData();
        }
    }, [s_id]);
    // const animals = [{ id: 1, name: 'name1', shelter: 'my shelter', type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },];

    if (isLoading) {
        return;
    } else {
        return (
            <div>
                <h2 style={title}>收容所內動物列表</h2>
                <div style={divLine} />
                <AniCard animals={animals} />
            </div>
        );
    }
}