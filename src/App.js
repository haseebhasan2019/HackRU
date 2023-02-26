import React from 'react'
// import './App.css'
import Front from "./Front"
import Back from "./Back"
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/admin" element={<Back />} />
            </Routes>
        </>
    )
}
export default App