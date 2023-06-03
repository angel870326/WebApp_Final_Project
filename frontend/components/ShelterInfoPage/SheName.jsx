import React, { useEffect, useState } from 'react';
// style
import { title, divLine, brownTheme } from "@/styles/jss/animal-cloud-adoption.js";
// next components
import { useRouter } from 'next/router';
// mui components
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

export default function SheName() {

    // Call API
    const router = useRouter();
    const { s_id } = router.query;
    const [isLoaded, setLoaded] = useState(false);
    const [shelter, setShelter] = useState({});
    useEffect(() => {
        if (s_id) {
            async function fetchData() {
                try {
                    const response = await fetch(`/api/getShelterInfo/${s_id}`);
                    const jsonData = await response.json();
                    setShelter(jsonData);
                } catch (error) { }
                setLoaded(true);
            }
            fetchData();
        }
    }, [s_id]);
    // const shelter = { id: 1, name: 'name1', address: 'myAddress', contact_phone: '0987654321', website: 'https://www.tcapo.gov.taipei/Content_List.aspx?n=8A474D4AA59E06B7' }

    return (
        <>
            {isLoaded && (
                <div>
                    <h2 style={title}>{shelter.name}</h2>
                    <div style={divLine} />
                    <p style={{ textAlign: 'center' }}>
                        地址：{shelter.address}<br />
                        電話：{shelter.contact_phone}<br /><br />
                        <ThemeProvider theme={brownTheme}>
                            官方網站🔗：<Button style={{ textDecoration: 'underline', maxWidth: "500px" }} href={shelter.website} target="_blank">{shelter.name}</Button>
                        </ThemeProvider><br />
                    </p>
                </div>
            )}
        </>
    );

}