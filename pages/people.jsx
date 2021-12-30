import Link from 'next/link';
import React, {useState} from 'react';
import Header from "../src/components/Header";
import LineBreaker from "../src/components/LineBreaker";
import LineSpacing from '../src/components/LineSpacing';
import PageView from "../src/components/PageView";

export default function pessoas() {

    const people = [
        'João',
        'Maria',
        'Ana',
        'Carlos',
        'Daniel',
        'Joana',
        'Miguel',
        'Laura'
    ];

    function renderPeople() {
        return(
            <>
                {people.map( 
                    (person, i) => (
                        <li key={i} class={'list'+i}>
                            {/* <a href={`/person/${person}`}>{person}</a> */}
                            <Link href={`/person/${person}`}>{person}</Link>
                        </li>
                    ) 
                )}
            </>
        );
    }

    let randomName = people[Math.round(Math.random() * (people.length-1 - 0) + 0)];
    const [nome, setNome] = useState(randomName);
    
    function nomeForm(e) {
        // if(e.code == 'Enter')
        setNome(e.target.value);
    }

    return(
        <>
            <Header />
            <PageView title='People'>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {/* <input type="text" value={nome} onChange={ (e) => nomeForm(e) } /> */}
                {/* <LineSpacing /> */}
                {/* <LineBreaker /> */}
                <b>Say hello to: </b><Link href={`/person/${nome}`}>{nome}</Link>
                {/* <ul>
                    {renderPeople()}
                </ul> */}
            </PageView>
        </>
    );
    
}