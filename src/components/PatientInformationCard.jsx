import React, { useContext } from 'react'
import InfoItem from './InfoItem';
import './InformationCard.css';

import DOBIcon from '../images/PersonInfoIcon/BirthIcon/BirthIcon.jpg';
import FemaleIcon from '../images/PersonInfoIcon/FemaleIcon/FemaleIcon.jpg';
import MaleIcon from '../images/PersonInfoIcon/MaleIcon/MaleIcon.jpg';
import PhoneIcon from '../images/PersonInfoIcon/PhoneIcon/PhoneIcon.jpg';
import InsuranceIcon from '../images/PersonInfoIcon/InsuranceIcon/InsuranceIcon.jpg';
import LabResults from './LabResults';
import { PatientContext } from '../App';

const PatientInformationCard = ({ patient }) => {

    return (
      <div className='d-flex flex-column mb-4'>
        <div className="bg-white rounded-lg shadow-md p-6 infocard d-flex flex-column section-curving mb-4">
          <div className="flex flex-col mb-4">
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="rounded-full mb-2"
              style={{width:"200px", height:"200px"}}
            />
            <h2 className="text-xl font-semibold patientName">{patient.name}</h2>
          </div>
          <div className="space-y-3">
            <InfoItem icon={DOBIcon} label="Date Of Birth" value={patient.date_of_birth} />
            <InfoItem icon={patient.gender === "Female"?FemaleIcon:MaleIcon} label="Gender" value={patient.gender} />
            <InfoItem icon={PhoneIcon} label="Contact Info" value={patient.phone_number} />
            <InfoItem icon={PhoneIcon} label="Emergency Contacts" value={patient.emergency_contact} />
            <InfoItem icon={InsuranceIcon} label="Insurance Provider" value={patient.insurance_type} />
          </div>
          <button type="button" className="btn showAllInfo">Show All Information</button>
        </div>
  
        <LabResults className='section-curving'/>
      </div>
    );
  };

export default PatientInformationCard;