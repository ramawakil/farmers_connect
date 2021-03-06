import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "@mui/material";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from "react-toastify";
import theme from "./app/config/theme";
import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <ThemeProvider theme={theme}>
//             <ToastContainer/>
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         </ThemeProvider>
//     </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ToastContainer/>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
