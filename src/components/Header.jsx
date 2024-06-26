//Header.jsx
import headerLogo from '../assets/logo.svg';
import headerAvatar from '../assets/avatar.png';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <img className="header__logo"
                    src={headerLogo} 
                    alt="App logo" />
            <p className="header__date-location"> Date / Location</p>
            <button className="header__add-close-btn">+ add/close btn</button>
            <div className="header__user-contaier">
                <p className="header__username">Place holder</p>
                <img src={headerAvatar} 
                        alt="user name" 
                        className="header__avatar" />
                
            </div>
        </header>
    );
};

export default Header;