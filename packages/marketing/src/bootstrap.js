import React from "react";
import { createRoot } from 'react-dom/client';
import { createMemoryHistory } from 'history';
import App from "./App";

const mount = (element, { onNavigate }) => {
    const history = createMemoryHistory();
    history.listen(onNavigate);

    console.log('marketing APP mount history: ', history);

    const root = createRoot(element);
    root.render(<App history={history} />);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, {
            onNavigate: (location) => {
                console.log('marketing APP bootstrap LOCATION: ', location);
            },
        });
    }
}

export { mount };
