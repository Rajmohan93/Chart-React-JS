import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const ApiBarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("https://suoxappbackend.herokuapp.com/api/sugar")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.patient_id));
          empAge.push(parseInt(dataObj.sugar_value));
        }
        setChartData({
          labels: empSal,
          datasets: [
            {
              label: "Patient Sugar Level",
              data: empAge,
              backgroundColor: "blue",
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Patient Sugar Level Data</h1>
      <div>
        <Bar
            data={chartData}
            options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: false },
            scales: {
                yAxes: [
                {
                    ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                    },
                    gridLines: {
                    display: false
                    }
                }
                ],
                xAxes: [
                {
                    gridLines: {
                    display: false
                    }
                }
                ]
            }
            }}
        />
      </div>
    </div>
  );
};

export default ApiBarChart;