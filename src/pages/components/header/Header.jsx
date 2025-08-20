
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
                </div>
                <div className="imageWrapper">
                    <img src={chair} alt="" />
                </div>
                
            </div>
            
        </div>

            
            
        
    )
}

export default Header