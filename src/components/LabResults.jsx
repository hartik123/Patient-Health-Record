import React, { useContext } from 'react';
import Download from '../images/download/download.jpg';
import './LabResults.css';
import { PatientContext } from '../App';

const LabResults = () => {

    const {currentPatientInformation} = useContext(PatientContext)

  const labTests = [
    'Blood Tests',
    'CT Scans',
    'Radiology Reports',
    'X-Rays',
    'Urine Test'
  ];
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm section-curving">
      <h2 className="text-2xl font-bold mb-4 lab-result-label">Lab Results</h2>
      <div className="space-y-2 scrollable-section-lab-results">
        { Object.keys(currentPatientInformation).length!=0 && currentPatientInformation.lab_results.map((test, index) => (
          <div 
            key={index} 
            className={`d-flex flex-row justify-content-between align-items-center py-2 ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="text-gray-700">{test}</div>
            <div 
              className="text-blue-500 hover:text-blue-700 transition-colors me-4"
              aria-label={`Download ${test}`}
              style={{border: "none"}}
            >
              <img src={Download} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;