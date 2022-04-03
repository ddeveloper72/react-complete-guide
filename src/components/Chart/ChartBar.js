import React from 'react';

import './ChartBar.css'

const ChartBar = (props) => {

    // define a name of a css variable
    let barFill = '0%';

    // calculate the actual css value from the props data
    if (props > 0) {
        barFill = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return <div className='chat-bar'>
        <div className='chart-bar__inner'>
            {/* add JS object in double {}.  Use camelCase cor CSS class names with (-) characters. */}
            <div className='chart-bar__fill' style={{height: barFill}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
};

export default ChartBar;
