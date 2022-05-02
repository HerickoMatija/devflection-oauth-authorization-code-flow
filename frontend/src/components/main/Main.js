import './Main.css';
import Auth from '../auth/Auth.js';
import Players from '../players/Players.js';
import Token from '../token/Token.js';

function Main() {
    return (
        <div className='main-container'>
            <div className='token-group-container'>
                <Token />
            </div>
            <Auth />
            <Players />
        </div>
    );
}

export default Main;
