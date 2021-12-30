import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = () => {
    return (
        <div>
            <h2>Line Chart</h2>
            <Line
                data = {
                    {
                        labels: ['Lavanya', 'Muthulakshmi', 'Abishake', 'Rajmohan', 'Hariharan', 'Sithara'],
                        datasets: [
                            {
                                label: "Employee Performance Stats - October",
                                data: [9, 7, 8, 6, 7, 7],
                                backgroundColor: 'orange',
                                borderColor: 'red',
                                borderWidth: 1
                            },
                            {
                                label: "Employee Performance Stats - November",
                                data: [8, 6, 9, 4, 8, 8],
                                backgroundColor: 'lightblue',
                                borderColor: 'blue',
                                borderWidth: 1
                            }
                        ]
                    }
                }
                height = {400}
                width = {600}
                options = {
                    {
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: 'red',
                                    fontSize: 16
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    max: 10,
                                    fontColor: 'red',
                                    fontSize: 16
                                }
                            }]
                        }
                    }
                }
            />
        </div>
    )
}

export default LineChart;