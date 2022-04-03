import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

// chart data is inherited through props
const Chart = (props) => {

    // render the chart in the DOM
    return <div className='chart'>
        {props.data
        // iterate using map through the [] of objects to return the data wanted
            .map(data => (
                <ChartBar value={data.value} />
            ))
        }
    </div>
};

export default Chart;
