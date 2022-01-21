import { useState } from "react";

function Select(){


    const [value,setValue] = useState('')


    return(
        <div>
            <select value={value} onChange={event => setValue(event.target.value)}>
                <option value="1">text 1</option>
                <option value="2">text 2</option>
                <option value="3">text 3</option>
                <option value="4">text 4</option>
            </select>
            <p>
                {value === '1' && 'вы выбрали text 1'}
                {value === '2' && 'вы выбрали text 2'}
                {value === '3' && 'вы выбрали text 3'}
                {value === '4' && 'вы выбрали text 4'}
            </p>
        </div>
    );
};

export default Select; 