import './Header.css';

function Header() {
    return (
        <div className='header-container'>
            <div className='logo'>
                Docker networking frontend
            </div>
            <ul className='menu'>
                <li><a href='frontend:3000'>Home</a></li>                
            </ul>
        </div>
    );
}

export default Header;