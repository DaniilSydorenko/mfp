import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
// import { ComponentPreviews, useInitial } from "./dev";
import { useInitial } from "./dev";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

// ReactDOM.render(
//     <DevSupport
//         ComponentPreviews={ComponentPreviews}
//         useInitialHook={useInitial}
//     >
//         <App/>
//     </DevSupport>,
//     document.querySelector("#root"),
// );
