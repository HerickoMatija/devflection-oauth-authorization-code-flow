import './Main.css';
import Auth from '../auth/Auth.js';
import Players from '../players/Players.js';
import Token from '../token/Token.js';

const ACCESS_TOKEN_URL = "http://localhost:5000/getAccessToken";

function Main() {
    return (
        <div className='main-container'>
            <div className='token-group-container'>
                <Token getTokenUrl={ACCESS_TOKEN_URL} name="Access token" />
            </div>
            <Auth />
            <Players />
        </div>
    );
}

export default Main;
