import './listings.css';
import image1 from '../images/parent1.png';
import image2 from '../images/Parent22.png';
import image3 from '../images/Parent33.png';
import image4 from '../images/Parent44.png';


function Listing() {
    return (
        <div className="listingWrapper">
            <a href="*">
                <div className="productCard-1">
                    <img src={image1} alt="" />
                </div>
            </a>
            <a href="*">
                <div className="productCard-2">
                    <img src={image2} alt="" />
                </div>
            </a>
            <a href="*">
                <div className="productCard-3">
                    <img src={image3} alt="" />
                </div>
            </a>
            <a href="*">
                <div className="productCard-4">
                    <img src={image4} alt="" />
                </div>
            </a>
            
            
            
            
        </div>
    )
}

export default Listing