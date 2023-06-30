import ChartScores from '../components/ChartScores';
import { useState } from 'react';
import { DivLocalsTot } from './LocalsDatosIndice.styled';
import SelectScore from '../components/SelectScore';

const LocalsDatosChart = () => {

    const [inputNum, setInputNum] = useState("0");

    return (
        <DivLocalsTot>
            <SelectScore inputNum={inputNum} setInputNum={setInputNum} />
            <ChartScores inputScore={inputNum} />
        </DivLocalsTot>
    )
}
export default LocalsDatosChart;