import React, { useContext, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { PatientContext } from './App';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const DiagnosisHistoryComponent = () => {
    const {currentPatientInformation, heartRate, setHeartRate, respiratoryRate, setRespiratoryRate, temperature, setTemperature} = useContext(PatientContext);

    const [data, setData] = useState({
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
            {
                label: 'Systolic',
                data: [140, 160, 135, 125, 145, 160],
                borderColor: 'rgba(221, 104, 187, 1)',
                backgroundColor: 'rgba(221, 104, 187, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(221, 104, 187, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(221, 104, 187, 1)',
            },
            {
                label: 'Diastolic',
                data: [90, 75, 100, 80, 88, 78],
                borderColor: 'rgba(127, 106, 239, 1)',
                backgroundColor: 'rgba(127, 106, 239, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(127, 106, 239, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(127, 106, 239, 1)',
            }
        ]
    });
    

    const generateData = () =>{
        var year_month_array = [];
        var systolic = [];
        var diastolic = [];

        const diagnosis_history = currentPatientInformation.diagnosis_history;

        diagnosis_history.forEach((diagnosis)=>{
            year_month_array.unshift(diagnosis.year+", "+diagnosis.month);
            systolic.unshift(diagnosis.blood_pressure.systolic.value);
            diastolic.unshift(diagnosis.blood_pressure.diastolic.value);

            // ----------------------------------

            
        })

        setData(prevData=>({...prevData, labels: year_month_array, 
            datasets: prevData.datasets.map((dataset, index)=>
            index === 0?{...dataset, data:systolic}:index===1?{...dataset, data:diastolic}: dataset
        )}));

    }


    useEffect(()=>{
        Object.keys(currentPatientInformation).length!=0 && generateData();
    }, [currentPatientInformation])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                }
            },
            y: {
                beginAtZero: false,
                min: 60,
                max: 180,
                title: {
                    display: true,
                    text: 'Blood Pressure (mmHg)',
                }
            }
        }
    };
    
    return <Line data={data} options={options} />;
}

export default DiagnosisHistoryComponent