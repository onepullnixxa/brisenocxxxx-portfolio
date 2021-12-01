import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/'>
                    <Route index element={<Index />} />

                </Route>
            </Routes>            
        </main>
    )
}

export default Main
