
import React from 'react'
import './InfoItem.css';

const InfoItem = ({ icon, label, value }) => (
    <div className="conatiner">
      {/* <img src={icon} className="text-gray-500" />
      <div>
        <p className="text-sm text-gray-500 infoItemLabelStyle">{label}</p>
        <p className="font-medium infoItemLabelDataStyle">{value}</p>
      </div> */}
      <div className='row'>
        <div className='col-md-3'><img src={icon} className="text-gray-500" /></div>
        <div className='col-md-9'><div>
        <p className="text-sm text-gray-500 infoItemLabelStyle">{label}</p>
        <p className="font-medium info-item-label-data">{value}</p>
      </div></div>
      </div>
      
    </div>
  );

export default InfoItem