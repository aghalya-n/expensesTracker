import './Chart.css'
import React from 'react'
import ChartBar from './ChartBar'

const Chart = props => {
    const dataVals = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataVals);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    max={totalMax}
                    label={dataPoint.label} 
                />
            ))}
        </div>
    );
};

export default Chart;