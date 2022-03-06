import '../styles/hero.css';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Hero = () => {
    return (
        <div className="hero">
            <div className="heading">
                <h1 className="title">Cari Cari</h1>
                <p className="desc">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
            </div>
            <div className="elements">
                <div className="event">
                    <span><FavoriteBorderOutlinedIcon className='icon blue' /></span>
                    <span>0</span>
                    <span>Label</span>
                </div>
                <div className="event">
                    <span><EventAvailableOutlinedIcon className='icon' /></span>
                    <span>0</span>
                    <span>Label</span>
                </div>
                <div className="event">
                    <span><EventAvailableOutlinedIcon className='icon' /></span>
                    <span>0</span>
                    <span>Label</span>
                </div>
                <div className="event">
                    <span><EventAvailableOutlinedIcon className='icon' /></span>
                    <span>0</span>
                    <span>Label</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;
