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
    // 後端利用 s_id 得到相對應的 animals [{id, name, type, sex, birth_year, area(可以不用), shelter, sheltered_date, numMember},]
    const [animals, setAnimals] = useState([]);
    // // NEW animals array
    // const animals = [{ id: 1, name: 'name1', type: '狗', sex: '公', birth_year: '2020', area: '北部', shelter: '臺北市動物之家', sheltered_date: '2020-04-06 00:00:00.000000', numMember: '1' },];
    // // OLD animals array
    // const animals = [{id, name, shelter, type, birth_year, numMember},]

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