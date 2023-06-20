import { React, useState } from 'react'
import {data} from '../data/datosFake';
import { DivResults, DivResultScore, Result, DivInfo } from './List.styled';

function List(props) {

    const filteredDataNeighbors = data.filter((barri) => {
        
        if (props.input.length < 4) {
            const result = "";
            return result;
        } else if (  barri.name.toLocaleLowerCase().includes(props.input)) {
            console.log({barri})
            return barri;
        }
    })

    console.log({filteredDataNeighbors})
    const rankingData = filteredDataNeighbors.map((neighbor) => {
            return (
        <DivResults key={neighbor.id}>

            <DivResultScore>
                <Result color="#63beffa7">{neighbor.score.toFixed(2)}
                </Result>
            </DivResultScore>
            <DivInfo>
                <h1 >{neighbor.name}</h1>
                {neighbor.fires && <li>"Hay ferias o mercados recurrentes en el barrio"</li>}
                {neighbor.mercats &&<li>"Hay algun mercado municipal cercano"</li>}
                {!neighbor.centres && <li>"Hay algun gran centro comercial cercano que puede desequilibrar el tejido comercial"</li>}
                {neighbor.galeries && <li>"Hay alguna galeria comercial en el barrio"</li>}
                <li>{neighbor.variacio? "Mucha variedad de comercios al alcance" : "Poca variedad de comercios al alcance"}</li>
                <li>{neighbor.quotidia? "Alta proporción de comercios de uso cotidiano en el barrio" : "Baja proporción de comercios de uso cotidiano en el barrio"}</li>
                
            </DivInfo>
                        
        </DivResults>             
                    )});

    return (
        <>
{rankingData}
        </>
    )
}

export default List;