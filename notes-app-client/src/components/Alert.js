import React from 'react';

const Alert = (alert) =>{

    return(
    <div className={`alert alert-${alert.type}`}>
        {alert.msg}
    </div>
    )
}

export default Alert;