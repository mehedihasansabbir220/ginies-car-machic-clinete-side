import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    },
        []);
    console.log(service)


    return (
        <div>
            <h3>Description : {service.description}</h3>
            {/* <h2>this is booking: {serviceId}</h2> */}
        </div>
    );
};

export default Booking;