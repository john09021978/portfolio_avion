
import chair from '../images/Right Image.png'
import './header.css'


function Header() {
    return (
        <div>

            <div className="headerWrapper">
                <div className="textWrapper">
                    <div className="topWrapper">
                        <div className="topTextWrapper">
                            <p>
                                The furniture brand for the future, with timeless designs
                            </p>
                        </div>
                    </div>
                    <div className="downWrapper">

                    </div>

                    
                </div>
                <img src={chair} alt="" />
                
            </div>
        </div>

            
            
        
    )
}

export default Header