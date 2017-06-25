import React from 'react';

export default function SplitNumbers({num1, num2}){
    return <div style={{display:'flex', textAlign: 'center'}}>
        {(typeof num1 === 'number' && <div style={{flexGrow: 1}}>{num1}</div>)}
        {(typeof num2 === 'number' && <div style={{flexGrow: 1}}>{num2}</div>)}
    </div>
}