import React, { useContext, useState } from 'react';
// import { Search, MoreVertical } from 'lucide-react';
import SearchIcon from '../images/searchIcon/searchIcon.jpg'
import './PatientList.css';
import { PatientContext } from '../App';

const PatientList = ({ patients }) => {
    const { currentPatientInformation, setCurrentPatientInformation } = useContext(PatientContext);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = patients.filter(patient => {
        return patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    );
    return (
        <div className="bg-white shadow-md p-4 max-w-md section-curving" >
            <h2 className="text-2xl font-bold patient-heading">Patients</h2>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-2 border rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div><img src={SearchIcon} /></div>
            </div>
            <div className="scrollable-section">
                {filteredPatients.map((patient, idx) => (
                    <div className='d-flex align-items-center my-4 patient-list-button' key={idx} onClick={() => setCurrentPatientInformation(patient)} style={{backgroundColor: patient.name==currentPatientInformation.name?"#D8FCF7":"#fff"}}>
                        <div>
                            <img src={patient.profile_picture} width="60px" />
                        </div>
                        <div className='mx-3'>
                            <div className='patient-name'>{patient.name}</div>
                            <div className='text-start'>{patient.gender}{' '}{patient.age}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientList