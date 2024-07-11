//Header.jsx
import headerLogo from '../assets/images/logo.svg';
import headerAvatar from '../assets/images/avatar.png';
import './Header.css';


function Header( {onAddButtonClick, weatherInfo}) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
   // console.log(currentDate);                              //debugging statement

    return (
        <header className="header">
            <img className="header__logo"
                    src={headerLogo} 
                    alt="App logo" />
            <p className="header__date-location"> {currentDate} / {weatherInfo.city}</p>
            <button type="button"
                          className="header__add-close-btn"
                          onClick={onAddButtonClick  }>+ Add clothes</button>
            <div className="header__user-container">
                <p className="header__username">Place holder</p>
                <img src={headerAvatar} 
                        alt="user name" 
                        className="header__avatar" />
                
            </div>
        </header>
    );
};

export default Header;