import '../styles/reviews.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { user1, user2, user3, us, italy } from '../assets';

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="review__header">
                <h2>Reviews</h2>
                <div className="review__icon">
                    <ArrowBackIcon />
                    <ArrowForwardIcon />
                </div>    
            </div>

            <div className="review">
                <div className="review__card">
                    <div className="review__card-front">
                        <div className="review__detail">
                            <img src={user1} alt="hellen" />
                            <div className="review__content">
                                <h4 className="review__title">Hellen Jummy</h4>
                                <div className="country">
                                    <img src={us} alt="usa" />
                                    <span>palo alto, ca</span>    
                                </div>    
                            </div>    
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>    
                    </div>
                    <div className="review__card-back"></div>    
                </div>
                <div className="review__card">
                    <div className="review__card-front">
                    <div className="review__detail">
                        <img src={user2} alt="isaac" />
                        <div className="review__content">
                            <h4 className="review__title">Isaac Oluwatermilorun</h4>
                            <div className="country">
                                <img src={italy} alt="italy" />
                                <span>palo alto, ca</span>    
                            </div>    
                        </div>    
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>    
                    </div>
                    <div className="review__card-back"></div>    
                </div>
                <div className="review__card">
                    <div className="review__card-front">
                    <div className="review__detail">
                        <img src={user3} alt="hellen" />
                        <div className="review__content">
                            <h4 className="review__title">Hellen Jummy</h4>
                            <div className="country">
                                <img src={us} alt="usa" />
                                <span>palo alto, ca</span>    
                            </div>    
                        </div>    
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>    
                    </div>
                    <div className="review__card-back"></div>    
                </div>    
            </div>
        </div>
    )
}

export default Reviews;
