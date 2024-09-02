import React from 'react';
import './DiagnosticList.css'


const DiagnosticList = ({ diagnoses }) => {
    console.log(diagnoses)
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl section-curving">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 diagnostic-heading">Diagnostic List</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className='table-head-style'>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4 font-semibold text-gray-700 table-heading">Problem/Diagnosis</th>
                            <th className="py-3 px-4 font-semibold text-gray-700 table-heading">Description</th>
                            <th className="py-3 px-4 font-semibold text-gray-700 table-heading" >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diagnoses.map((diagnosis, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-3 px-4 text-gray-800 table-data">{diagnosis.name}</td>
                                <td className="py-3 px-4 text-gray-600 table-data">{diagnosis.description}</td>
                                <td className="py-3 px-4 table-data">{diagnosis.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DiagnosticList;