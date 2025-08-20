import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import AboutComp from '../components/aboutComp/AboutComp'

import './main.css'

function Main() {
    return (
        <div className='mainWrapper'>
            <Navbar />
            <Header />
            <AboutComp />
        </div>
    )
};

export default Main