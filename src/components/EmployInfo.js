import React from 'react';

function EmployInfo(props) {
    const employeeArr = props.employee

    return (
        <>
        {employeeArr.map((data, index) =>
            <div className="row display" key={index}>
                <div className="col-md-3">
                    <img src={data.picture.thumbnail} alt="..."/>
                </div>
                <div className="col-md-3">
                    {data.name.first} {data.name.last}
                </div>
                <div className="col-md-3">
                    {data.location.city}, {data.location.state}
                </div>
                <div className="col-md-3">
                    {data.dob.age}
                </div>
                
            </div>        
        
        )}
        </>
    )
}

export default EmployInfo;


