import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Audio from '../pages/Audio';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/'>
                    <Route index element={<Index />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="audio" element={<Audio />} />
                </Route>
            </Routes>

            (function() {
                console.log("~~ welcome to chris' personal space on the web :)")
            })();
            
        </main>
    )
}

export default Main
