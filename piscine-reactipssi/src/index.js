import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNavbar from './Components/AppNavbar/AppNavbar'
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
      <header className="mb-5">
        <AppNavbar></AppNavbar>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carnet" element={<CarnetPage isNotesDisplayed={true} />} />
        <Route path="/carnet/add" element={<CarnetAddPage />} />
        <Route path="/carnet/notes/preview" element={<NotesPreviewPage />} />
        <Route path="/carnet/notes/add/:carnetid" element={<NotesAddPage />} />
        <Route path="/carnet/notes/:id" element={<NotesUpdatePage />} />
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
