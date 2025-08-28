import './newListing.css'
import bigImage from '../images/newlisting1.png'
import image1 from '../images/newlisting2.png'
import image2 from '../images/newlisting3.png'



function NewListing() {
    return (
        <div className="newListingWrapper">
            <h1>Our popular products</h1>

            <div className="newListingCardWrapper">
                <a href="*">
                    <div className="bigCard-1">
                        <img src={bigImage} alt="" />
                        <div className="describeNewListingWrapper">
                            <p>The Poplar suede sofa</p>
                            <p>£980</p>
                        </div>
                    </div>
                </a>
                <a href="*">
                    <div className="card-1">
                        <img src={image1} alt="" />
                    </div>
                </a>
                <a href="*">
                    <div className="card-2">
                        <img src={image2} alt="" />
                    </div>
                </a>
            </div>

            <div className="viewCollectionWrapper">
                <a href="*">View collection</a>
            </div>
            
        </div>
    )
}


export default NewListing