import { useState } from 'react';
import '../styles/navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '../assets/logo.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" className="logoImage" />
            </div>
            <div className="items">
                <ul className="list">
                    <li className="listItem">
                        <SearchIcon width={10} height={10} />
                        Search
                    </li>
                    <li className="listItem">Help</li>
                    <li className="listItem">Account</li>
                    <li className="listItem">
                        <ShoppingBasketOutlinedIcon />
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className='navbar__smallscreen'>
                    <MenuIcon color='#fff' className='navbar__menu' onClick={() => setToggleMenu(true)} />

                    {toggleMenu && (
                        <div className='navbar__smallscreen_overlay'>
                            <CloseIcon className='overlay__close' onClick={() => setToggleMenu(false)} />
                            <ul className='navbar__smallscreen-list'>
                                <li className="smallscreen__listItem">
                                    <SearchIcon width={10} height={10} />
                                    Search
                                </li>
                                <li className='smallscreen__listItem'>Help</li>    
                                <li className='smallscreen__listItem'>Account</li> 
                                <li className="smallscreen__listItem">
                                    <ShoppingBasketOutlinedIcon />
                                </li>   
                            </ul>
                        </div>
                    )}    
                </div>
            </div>
        </div>
    )
}

export default Navbar;
