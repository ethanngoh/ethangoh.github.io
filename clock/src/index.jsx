import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';

function run(){
    ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
    );
    
}

if (document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}