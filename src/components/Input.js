import { useState } from "react";

function Input(){
    const [value, setValue] = useState(0)

    const changeHandle = (event) =>{
    setValue(event.target.value)
    };

    return(
        <div>
            <input value={value} onChange={changeHandle} />
            <p>{value}</p>
        </div>
    );
};



export default Input; 