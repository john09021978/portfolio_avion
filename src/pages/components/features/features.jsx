import './features.css'
import img1 from '../images/Delivery.png'
import img2 from '../images/Checkmark--outline.png'
import img3 from '../images/Purchase.png'
import img4 from '../images/Sprout.png'




function Feauters() {
    return (
        <div className="feautersWrapper">
            <div className="feautersHeader">
                <p>What makes our brand different</p>
            </div>
            <div className="feautersBody">
                <a href="*">
                    <div className="wrap-1">
                        <img src={img1} alt="" />
                        <h1>Next day as standard</h1>
                        <h3>Order before 3pm and get your order the next day as standard</h3>

                    </div>
                </a>
                <a href="*">
<div className="wrap-2">
                    <img src={img2} alt="" />
                    <h1>Made by true artisans</h1>
                    <h3>Handmade crafted goods made with
real passion and craftmanship</h3>
                </div>
                </a>
                <a href="*">
<div className="wrap-3">
                    <img src={img3} alt="" />
                    <h1>Unbeatable prices</h1>
                    <h3>For our materials and quality you won’t find better prices anywhere</h3>
                </div>
                </a>
                <a href="*">
                    <div className="wrap-4">
                    <img src={img4} alt="" />
                    <h1>Recycled packaging</h1>
                    <h3>We use 100% recycled packaging to ensure our footprint is manageable</h3>
                </div>
                </a>
                
                
                
                
            </div>
            

        </div>
    )
}

export default Feauters