import React, { useEffect, useState } from 'react';
// style
import { title, divLine } from "@/styles/jss/animal-cloud-adoption.js";
// next components
import { useRouter } from 'next/router';
//router method (no use now)
// import { useParams } from 'react-router-dom';

function SheName() {

    //const { s_id } = useParams(); //router method to get shelter_id
    const router = useRouter();
    const { s_id } = router.query;

    // 後端利用 s_id 得到 {name, address, contact_phone, contact_email}
    const [shelter, setShelter] = useState({});
    useEffect(() => {
        async function fetchData() {
            try {
                // use shelterId = 1 just for testing
                const response = await fetch('/api/getShelterInfo/1');
                const jsonData = await response.json();
                setShelter(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    // const shelter = { id: 1, name: 'name1', address: 'myAddress', contact_phone: '0987654321', contact_email: 'mymail@gmail.com' }

    return (
        <div>
            {/* test s_id */}
            <h1>[test] <code>s_id</code> in ShelterInfoPage/SheName: {s_id}</h1>

            <h2 style={title}>{shelter.name}</h2>
            <div style={divLine} />

            <p style={{ textAlign: 'center' }}>
                地址：{shelter.address}<br />
                電話：{shelter.contact_phone}<br />
                email：{shelter.contact_email}
            </p>

        </div>
    );
}
export default SheName;