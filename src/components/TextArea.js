import React, { useState } from 'react';

function TextArea(){
    const [value, setValue] = useState('text');

    return (
        <div>
            <textarea value={value} onChange={event => setValue(event.target.value)} />
            <p>{value}</p>
        </div>
    )
}

export default TextArea;