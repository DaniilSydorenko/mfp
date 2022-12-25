import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/Marketing';
import { useNavigate } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('container App - Marketing useEffect');

        mount(ref.current, {
            onNavigate: (history) => {
                console.log('container App - Marketing onNavigate history: ', history);

                const { pathname } = history.location;
                navigate(pathname);
                
                // if (nextPathName) {
                //     navigate(nextPathName);
                // }
            },
        });
    }, []);

    return <div ref={ref} />;
};
