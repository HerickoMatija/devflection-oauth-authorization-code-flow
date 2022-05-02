import './Header.css';

function Header() {
    return (
        <div className='header-container'>
            <div className='logo'>
                OAuth2 Authorization Code Flow
            </div>
            <ul className='menu'>
                <li><a href='/index.html'>Home</a></li>                
            </ul>
        </div>
    );
}

export default Header;
