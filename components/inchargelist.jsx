import React from 'react';

function InchargeList() {
  // Define the incharge data
  const incharge = [
    {
      "Year": "II",
      "Semester": "II",
      "Incharge name": "Mrs.P.Shyamala",  // Corrected property name
      "Section": "Alpha",
      "Contact no": "9989346867"          // Corrected property name
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mrs.Soumya saraf",  // Corrected property name
        "Section": "beta",
        "Contact no": "7789463893"  
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mrs.S.Monika",  // Corrected property name
        "Section": "Gamma",
        "Contact no": "5569876876" 
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "M.Snthosh Kumar",  // Corrected property name
        "Section": "Delta",
        "Contact no": "9968767476" 
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mrs.P.Sabhitha",  // Corrected property name
        "Section": "Sigma",
        "Contact no": "7789463893" 
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mr.G.Raju",  // Corrected property name
        "Section": "Omega",
        "Contact no": "6689797983" 
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mrs.G.Suneetha",  // Corrected property name
        "Section": "Zeta",
        "Contact no": "7789463893" 
    },
    {
        "Year": "II",
        "Semester": "II",
        "Incharge name": "Mr.Naveen Kumar",  // Corrected property name
        "Section": "Epsilon",
        "Contact no": "7789463893" 
    },
    // Remaining incharge data...
  ];

  return (
    <div>
      <h1>Incharge Details</h1>
      <table className="incharge-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Semester</th>
            <th>Incharge name</th>
            <th>Section</th>
            <th>Contact no</th>
          </tr>
        </thead>
        <tbody>
          {incharge.map((incharge, index) => (
            <tr key={index}>
        
              <td>{incharge.Year}</td>
              <td>{incharge.Semester}</td>
              <td>{incharge["Incharge name"]}</td>  {/* Access using correct property name */}
              <td>{incharge.Section}</td>
              <td>{incharge["Contact no"]}</td>     {/* Access using correct property name */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InchargeList;
