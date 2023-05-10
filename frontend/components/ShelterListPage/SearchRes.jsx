import React from 'react';
// style
import { title, divLine } from "@/styles/jss/components/AnimalListpage/generalStyle";
// my components
import SheCard from './SheCard';

function SearchRes() {
    /*
        shelter array: {id, name, address, numAnimal}
        之後 +「查看更多」link? key-id?
    */
    const shelters = [
        { id: 1, name: 'name1', address: 'myAddress', numAnimal: 'my numAnimal' },
        { id: 2, name: 'name2', address: 'myAddress', numAnimal: 'my numAnimal' },
        { id: 3, name: 'name3', address: 'myAddress', numAnimal: 'my numAnimal' },
        { id: 4, name: 'name4', address: 'myAddress', numAnimal: 'my numAnimal' },
        { id: 5, name: 'name5', address: 'myAddress', numAnimal: 'my numAnimal' },
        { id: 6, name: 'name6', address: 'myAddress', numAnimal: 'my numAnimal' },
        
    ];

    return(
        <div>
           <h2 style={title}>搜尋結果</h2>
           <div style={divLine}/>
            
            <SheCard shelters={shelters} />
           
        </div>
    );
}
export default SearchRes;
