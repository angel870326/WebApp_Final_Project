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


    // 後端利用 s_id 得到相對應的 animals [{id, name, type, sex, birth_year, area(可以不用), shelter, sheltered_date, numMember},]
    // NEW animals array
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


    // OLD animals array: {id, name, shelter, type, birth_year, numMember}
    /*
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
    */

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
