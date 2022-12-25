import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history }) => {
    console.log(history)
    return (
        <StylesProvider generateClassName={createGenerateClassName({
            productionPrefix: 'ma',
        })}>
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route exact path="/pricing" element={<Pricing />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </StylesProvider>
    );
};