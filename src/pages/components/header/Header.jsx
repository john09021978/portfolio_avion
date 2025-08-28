
import chair from '../images/Right Image.png'
import './header.css'


function Header() {
    return (
        <div className='headerWrapper'>
            <div className="wrapWrapper">
                <div className="textWrapper">
                    <div className="topTextWrapper">
                        <div className="upText">
                            <p>
                                The furniture brand for the future, with timeless designs
                            </p>
                        </div>
                        <div className="downText">
                            <p>
                                View collection
                            </p>
                        </div>
                    </div>
                    <div className="bottomTextWrapper">
                        <p>
                            A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
                        </p>
                    </div>
                </div>
                <div className="imageWrapper">
                    <img src={chair} alt="" />
                </div>
                
            </div>
            
        </div>

            
            
        
    )
}

export default Header