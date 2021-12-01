import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import About from '../pages/About';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/'>
                    <Route index element={<Index />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>            
        </main>
    )
}

export default Main
