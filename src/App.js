import './App.css';
import DiagnosisHistoryComponent from './DiagnosisHistoryComponent';
import HealthCardComponent from './components/HealthCardComponent';
import HeartImage from './images/HeartBPM/HeartBPM@2x.jpg';
import RespiratoryRateImage from './images/respiratoryrate/respiratoryrate@2x.jpg';
import TemperatureImage from './images/temperature/temperature@2x.jpg';
import PatientInformationCard from './components/PatientInformationCard';

import JessicaPhoto from './images/PatientImages/JessicaPhoto/Jessica.png';
import PatientList from './components/PatientList';
import DiagnosticList from './components/DiagnosticList';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './components/Header';



export const PatientContext = React.createContext({});

function App() {
  let username = process.env.REACT_APP_USERNAME;
  let password = process.env.REACT_APP_PASSWORD;
  var auth = window.btoa(`${username}:${password}`);
  const [allUsers, setAllUsers] = useState([]);
  const [currentPatientInformation, setCurrentPatientInformation] = useState({})
  const [heartRate, setHeartRate] = useState(0);
  const [respiratoryRate, setRespiratoryRate] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
      .then(res => {
        console.log(res)
        setAllUsers([...allUsers, ...res.data])
        if (res.data) {
          setCurrentPatientInformation(res.data[0])
        }
      })
      .catch(err => console.log(err))
  }, [])

  const patientsData = [
    { id: 1, name: 'Emily Williams', gender: 'Female', age: 18, avatar: JessicaPhoto },
    { id: 2, name: 'Ryan Johnson', gender: 'Male', age: 45, avatar: JessicaPhoto },
    { id: 3, name: 'Brandon Mitchell', gender: 'Male', age: 36, avatar: JessicaPhoto },
    { id: 4, name: 'Jessica Taylor', gender: 'Female', age: 28, avatar: JessicaPhoto },
    { id: 5, name: 'Samantha Johnson', gender: 'Female', age: 56, avatar: JessicaPhoto },
    { id: 6, name: 'Ashley Martinez', gender: 'Female', age: 54, avatar: JessicaPhoto },
    { id: 7, name: 'Olivia Brown', gender: 'Female', age: 32, avatar: JessicaPhoto },
    { id: 8, name: 'Tyler Davis', gender: 'Male', age: 19, avatar: JessicaPhoto },
    { id: 9, name: 'Kevin Anderson', gender: 'Male', age: 30, avatar: JessicaPhoto },
  ];

  const diagnosticData = [
    { name: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
    { name: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
    { name: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
    { name: 'Osteoarthritis', description: 'Degenerative joint disease', status: 'Under treatment' },
  ];

  const patientData = {
    name: 'Jessica Taylor',
    avatar: JessicaPhoto,
    dateOfBirth: 'August 23, 1996',
    gender: 'Female',
    contactInfo: '(415) 555-1234',
    emergencyContacts: '(415) 555-5678',
    insuranceProvider: 'Sunrise Health Assurance'
  };

  useEffect(()=>{
    var totalTemp=0;
    var totalHeartRate=0;
    var totalRespiratoryRate=0;
    if(Object.keys(currentPatientInformation).length!=0){
      currentPatientInformation.diagnosis_history.forEach((d)=>{
        totalTemp+=d.temperature.value
        totalHeartRate+=d.heart_rate.value
        totalRespiratoryRate+=d.respiratory_rate.value
      })
      setTemperature(totalTemp)
      setHeartRate(totalHeartRate)
      setRespiratoryRate(totalRespiratoryRate)
      // console.log("TOTAL TEMP RATE: ", totalTemp);
      // console.log("TOTAL HEART RATE: ", totalHeartRate);
      // console.log("TOTAL RESPIRATORY RATE: ", totalRespiratoryRate);
    }
  }, [currentPatientInformation])
  

  return (
    <PatientContext.Provider value={{ currentPatientInformation, setCurrentPatientInformation, heartRate, setHeartRate, respiratoryRate, setRespiratoryRate, temperature, setTemperature }}>
      <div className='App'>
      <Header />
      <div className=' container-fluid text-center'>
        <div className='row'>
          <div className='col-md-3'>
            <PatientList patients={allUsers} />
          </div>
          <div className='col-md-6'>
            <div className='section-curving mb-4'>
              <h2 className="text-2xl font-bold mb-4 diagnosis-history-label">Diagnosis History</h2>
              <DiagnosisHistoryComponent />
              <div className='health-dashboard'>
                <div className='container'>
                  <div className='row'>
                    <HealthCardComponent
                      icon={RespiratoryRateImage}
                      title="Respiratory Rate"
                      value="20"
                      unit="bpm"
                      status="Normal"
                      statusClass="normal"
                      className="col-md-4"
                      val={respiratoryRate}
                    />
                    <HealthCardComponent
                      icon={TemperatureImage}
                      title="Temperature"
                      value="98.6"
                      unit="°F"
                      status="Normal"
                      statusClass="normal"
                      className="col-md-4"
                      val={temperature}
                    />
                    <HealthCardComponent
                      icon={HeartImage}
                      title="Heart Rate"
                      value="78"
                      unit="bpm"
                      status="Lower than Average"
                      statusClass="low"
                      className="col-md-4"
                      val={heartRate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <DiagnosticList diagnoses={Object.keys(currentPatientInformation).length != 0 ? currentPatientInformation.diagnostic_list : []} className='section-curving' />
          </div>
          <div className='col-md-3'>
            <PatientInformationCard patient={currentPatientInformation} />
          </div>
        </div>
      </div>
      </div>

    </PatientContext.Provider>
  );
}

export default App;


















// const App = () => {
//     let username = 'coalition';
//   let password = 'skills-test';
//   var auth = window.btoa(`${username}:${password}`);
//   const arr = [1,2,3,4,5]
//   const [user, setUser] = useState([]);

//   useEffect(()=>{
//     let sum = 0;
//     arr.forEach(a =>{
//       sum+=a
//     })
//     console.log(sum)
//   })

//   useEffect(() => {
//         axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
//           headers: {
//             'Authorization': `Basic ${auth}`
//           }
//         })
//           .then(res => {
//             setUser(res.data[0].diagnosis_history)
//           })
//           .catch(err => console.log(err))
//       }, [])


//   useEffect(()=>{
//     var total=0;
//     user.forEach((u)=>total+=u.heart_rate.value)
//     console.log("TOTAL:",total)
//   }, [user])

//   return (
//     <div>App</div>
//   )
// }

// export default App