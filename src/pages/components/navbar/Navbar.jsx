import './navbar.css'
// import search from '../images/Search.png'
// import basket from '../images/Shopping--cart.png'
// import user from '../images/User--avatar.png'

function Navbar() {
    return (
        <div className='navbarWrapper'>
            {/* <div className="topWrapper">
                <div className="searchWrapper">
                    <a href="*">
                        <img src={search} alt="" />
                        </a>
                </div>
                <div className="logoWrapper">
                    <a href="*" className='logo'>Avion</a>
                </div>
                <div className="basketWrapper">
                    <div className="basketWrap">
                        <a href="*">
                            <img src={basket} alt="" />
                        </a>
                    </div>
                    <div className="userWrap">
                        <span>
                            <a href="*">
                                <img src={user} alt="" />
                            </a>
                        </span>
                    </div>
                </div>
            </div> */}
            <div className="downWrapper">
                <a href="*">Plant pots</a>
                <a href="*">Ceramics</a>
                <a href="*">Tables</a>
                <a href="*">Chairs</a>
                <a href="*">Crockery</a>
                <a href="*">Tableware</a>
                <a href="*">Cutlery</a>
            </div>
        </div>
    )
};

export default Navbar