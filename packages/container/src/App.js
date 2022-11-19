import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Marketing from './components/Marketing';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={createGenerateClassName({
                productionPrefix: 'co',
            })}>
                    <Header />
                    <Marketing />
            </StylesProvider>
        </BrowserRouter>
    );
};
