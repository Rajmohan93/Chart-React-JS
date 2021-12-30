import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = () => {
    return (
        <div>
            <h2>Doughnut Chart</h2>
            <Doughnut
                data = {
                    {
                        labels: ['Lavanya', 'Muthulakshmi', 'Abishake', 'Rajmohan', 'Hariharan', 'Sithara'],
                        datasets: [
                            {
                                label: "Employee Performance Stats - October",
                                data: [9, 8, 6, 10, 7, 8],
                                backgroundColor: ['red', 'yellow', 'green', 'coral', 'maroon', 'blue'],
                                borderWidth: 3
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

export default DoughnutChart;