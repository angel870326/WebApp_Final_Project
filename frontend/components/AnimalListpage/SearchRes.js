import React from 'react';
// style
import { title, divLine } from "@/styles/jss/components/AnimalListpage/generalStyle";
// my components
import AniCard from '../AnimalListpage/AniCard';

function SearchRes() {

    /*
        animal array: {id, name, image, shelter, type, birth_year, numMember}
        之後 +「查看更多」link? key-id?
    */
    const animals = [
        { id: 1, name: 'name1', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 2, name: 'name2', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 3, name: 'name3', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 4, name: 'name4', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 5, name: 'name5', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 6, name: 'name6', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 7, name: 'name7', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
        { id: 8, name: 'name8', image: 'https://picsum.photos/seed/picsum/200/140', shelter: 'my shelter',  type: 'my type', birth_year: 'my birth_year', numMember: 'my numMember' },
    ];

    return(
        <div>
            <h2 style={title}>搜尋結果</h2>
            <div style={divLine}/>
            
            <AniCard animals={animals} />
            
        </div>
    );
}
export default SearchRes;
