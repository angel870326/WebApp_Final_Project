import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// my components
import SheCard from './SheCard';

export default function SearchRes() {

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
    // const shelters = [{ id: 1, name: 'name1', address: 'myAddress', numAnimal: 'my numAnimal' },];

    if (isLoading) {
        return;
    } else {
        return (
            <div>
                <h2 style={title}>搜尋結果</h2>
                <div style={divLine} />
                <SheCard shelters={shelters} />
            </div>
        );
    }

}