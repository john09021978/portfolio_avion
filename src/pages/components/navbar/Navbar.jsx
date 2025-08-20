import './navbar.css'


function Navbar() {
    return (
        <div className='navbarWrapper'>
            <div className="topWrapper">
                
                    <a href="*" id='search'>
                        
                    </a>
                
                <a href="*" className='logo' id='logo'>Avion</a>
                <div className="basketWrapper">
                    
                        <a href="*" id='basket'>

                        </a>
                    
                    <a href="*" id='user' >
                        
                    </a>
                </div>
            </div>
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