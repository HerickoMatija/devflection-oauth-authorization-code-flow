import React, { useState, useEffect } from 'react';
import './Healthcheck.css';

function Healthcheck(props) {    
    const [isOnline, setOnline] = useState(false);

    useEffect(() => {        
        const healthcheckCall = async () => {
            const healthcheckResult = await fetch(props.serviceUrl)
            .then(resp => resp.ok)
            .catch(() => false);
    
            setOnline(healthcheckResult);
        }

        let healthcheckInterval = setInterval(() => healthcheckCall(), 15000);

        return () => clearInterval(healthcheckInterval);
    }, [isOnline, props.serviceUrl]);

    return (        
        <div className={`healthcheck-container ${isOnline ? 'online' : 'offline'}`}>
            {getMessage(isOnline)}
        </div>
    );

    function getMessage(isServiceOnline) {
        if (isServiceOnline) {
            return <div className='message'>{props.serviceName} is online!</div>;
        } else {
            return <div className='message'>{props.serviceName} is offline!</div>;
        }
    }
}

export default Healthcheck;