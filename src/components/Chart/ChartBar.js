import './ChartBar.css'
import React from 'react'

const ChartBar = props => {
    let barFillHt = '0%';

    if (props.max > 0) {
        barFillHt = Math.round((props.value / props.max) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHt}} ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;