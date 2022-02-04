import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import HomePage from './Pages/HomePage'
import CarnetPage from './Pages/CarnetPage'
import CarnetAddPage from './Pages/CarnetAddPage'
import NotesPreviewPage from './Pages/NotesPreviewPage'
import NotesAddPage from './Pages/NotesAddPage'
import NotesUpdatePage from './Pages/NotesUpdatePage'
import ConfigPage from './Pages/ConfigPage'

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/carnet" element={<CarnetPage />} />
                <Route path="/carnet/add" element={<CarnetAddPage />} />
                <Route path="/notes/preview" element={<NotesPreviewPage />} />
                <Route path="/notes/add" element={<NotesAddPage />} />
                <Route path="/notes/:id" element={<NotesUpdatePage />} />
                <Route path="/config" element={<ConfigPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
