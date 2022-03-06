import '../styles/shows.css';
import EastIcon from '@mui/icons-material/East';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';

import { benny, andrea, shilpa, vijay } from '../assets';

const Shows = () => {
    return (
        <div className='shows'>
            <div className='header'>
                <h2>Upcoming Shows</h2>
                <button type='button'>View All</button>    
            </div>

            <div className="upcoming-shows">
                <div className="card">
                    <div className="card-front">
                        <div className='img'>
                            <img src={benny} alt="benny" />
                        </div>
                        <div className="content">
                            <span className='category'>Folk</span>
                            <h3>Benny Dayal</h3>
                            <div className="links">
                            <span className='more'>More Info <EastIcon /></span>
                            <span className='ticket'><BookOnlineOutlinedIcon /></span>  
                            </div>
                        </div>    
                    </div>
                    <div className="card-back"></div>    
                </div>

                <div className="card">
                    <div className="card-front">
                        <div className='img'>
                            <img src={vijay} alt="vijay" />
                        </div>
                        <div className="content">
                            <span className='category'>Bollywood</span>
                            <h3>Vijay Yesudas</h3>
                            <div className="links">
                            <span className='more'>More Info <EastIcon /></span>
                            <span className='ticket'><BookOnlineOutlinedIcon /></span>  
                            </div>
                        </div>    
                    </div>
                    <div className="card-back"></div>    
                </div>

                <div className="card">
                    <div className="card-front">
                        <div className='img'>
                            <img src={andrea} alt="andrea" />
                        </div>
                        <div className="content">
                            <span className='category'>Folk</span>
                            <h3>Andrea Jeremiah</h3>
                            <div className="links">
                            <span className='more'>More Info <EastIcon /></span>
                            <span className='ticket'><BookOnlineOutlinedIcon /></span>  
                            </div>
                        </div>    
                    </div>
                    <div className="card-back"></div>    
                </div>

                <div className="card">
                    <div className="card-front">
                        <div className='img'>
                            <img src={shilpa} alt="shilpa" />
                        </div>
                        <div className="content">
                            <span className='category'>Folk</span>
                            <h3>Shilpa Rao</h3>
                            <div className="links">
                            <span className='more'>More Info <EastIcon /></span>
                            <span className='ticket'><BookOnlineOutlinedIcon /></span>  
                            </div>
                        </div>    
                    </div>
                    <div className="card-back"></div>    
                </div>    
            </div>
        </div>
    )
}

export default Shows;
