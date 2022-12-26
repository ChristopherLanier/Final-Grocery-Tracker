import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/app-router';
import Footer from './components/footer'
import Header from './components/header'
import style from './style.module.scss';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className={style.page}>
                    <AppRouter />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )   

}

export default App