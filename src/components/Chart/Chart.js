import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

// chart data is inherited through props
const Chart = (props) => {

    // create a variable for returning and [] of data values
    const dataValue = props.data
        .map(data => data.value);

    // create a variable for calculating the maxValue
    const totatlMaximum = Math.max();

    // render the chart in the DOM
    return <div className='chart'>
        {props.data
            // iterate using map through the [] of objects to return the data wanted
            .map(data => (
                <ChartBar key={data.id} value={data.value} label={data.label} maxValue={null} />
            ))
        }
    </div>
};

export default Chart;
