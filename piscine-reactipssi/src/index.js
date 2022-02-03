import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import HomePage from './Pages/HomePage/HomePage'
import CarnetPage from './Pages/CarnetPage'
import CarnetAddPage from './Pages/CarnetAddPage'
import NotesPreviewPage from './Pages/NotesPreviewPage'
import NotesAddPage from './Pages/NotesAddPage'
import NotesUpdatePage from './Pages/NotesUpdatePage'
import ConfigPage from './Pages/ConfigPage'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carnet" element={<CarnetPage />} />
          <Route path="/carnet/add" element={<CarnetAddPage />} />
          <Route path="/notes/preview" element={<NotesPreviewPage />} />
          <Route path="/notes/add" element={<NotesAddPage />} />
          <Route path="/notes/:id" element={<NotesUpdatePage />} />
          <Route path="/config" element={<ConfigPage />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
