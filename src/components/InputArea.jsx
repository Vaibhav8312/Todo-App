import React, { useState } from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");  //state variable to store the input text

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);   //update state with the user's input
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;