import { useState } from "react";
import {InputDatos} from "./DropdownInput.styled";
import List from './List';


const DropdownInput = () => {

    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


console.log({inputText});
    return (
        <div>
            
<label htmlFor="datos"> Buscar barrio para conocer el índice proximidad del comercio. </label>
            <InputDatos type="text" name="datos" placeholder="escribe el nombre del barrio"
             onChange={inputHandler} value={inputText} />

        <List input={inputText} />
            
        </div >
    )
}
export default DropdownInput;