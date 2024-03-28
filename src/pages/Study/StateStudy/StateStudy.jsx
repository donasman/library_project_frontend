import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';
import Box2 from '../Box2/Box2';

function StateStudy(props) {

const inputState = useState("");
const inputState2 = useState("");
useEffect(() => {
    console.log(inputState);
    return () => {
        console.log("inputA 마운트 해제")
    }
    
}, [inputState[0]])

console.log("렌더링")
useEffect(() => {
    console.log(inputState2);
    return () => {
        console.log("inputB 마운트 해제")
    }
}, [inputState2[0]])

console.log("렌더링2")

const handleTextInputOnchange = (e) => {
    if(e.target.name === "inputA") {
        const [ value, setValue ] = inputState;
        setValue(e.target.value);
    }
    if(e.target.name === "inputB") {
        const [ value, setValue ] = inputState2;
        setValue(e.target.value);

    }
}

    return (
        <div>
            <input 
                type="text"
                name="inputA" 
                onChange={handleTextInputOnchange}/>
            <input 
                type="text"
                name="inputB" 
                onChange={handleTextInputOnchange}/>
                <Box value={inputState[0]}/>
                <Box2 value={inputState2[0]}/>
        </div>
    );
}

export default StateStudy;