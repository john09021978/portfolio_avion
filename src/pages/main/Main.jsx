import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Feauters from '../components/features/features'
import Listing from '../components/listings/listings'
import NewListing from '../components/newListing/newListing'
import Sign from '../components/sign/Sign'
import FeaturesLast from '../components/featureslast/featuresLast'
import Footer from '../components/footer/footer'

import './main.css'

function Main() {
    return (
        <div className='mainWrapper'>
            <Navbar />
            <Header />
            <Feauters />
            <Listing />
            <NewListing />
            <Sign />
            <FeaturesLast />
            <Footer />
        </div>
    )
};

export default Main