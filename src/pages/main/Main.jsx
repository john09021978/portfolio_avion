import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Feauters from '../components/features/features'
import Listing from '../components/listings/listings'
import NewListing from '../components/newListing/newListing'

import './main.css'

function Main() {
    return (
        <div className='mainWrapper'>
            <Navbar />
            <Header />
            <Feauters />
            <Listing />
            <NewListing />
        </div>
    )
};

export default Main