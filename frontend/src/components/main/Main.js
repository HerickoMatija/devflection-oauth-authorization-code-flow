import './Main.css';
import Auth from '../auth/Auth.js';
import Players from '../players/Players.js';
import Token from '../token/Token.js';

const ACCESS_TOKEN_URL = "http://localhost:5000/getAccessToken";
const REFRESH_TOKEN_URL = "http://localhost:5000/getRefreshToken";

function Main() {
    return (
        <div className='main-container'>
            <div className='token-group-container'>
                <Token getTokenUrl={ACCESS_TOKEN_URL} name="Access token" />
                <Token getTokenUrl={REFRESH_TOKEN_URL} name="Refresh token" />
            </div>
            <Auth />
            <Players />
        </div>
    );
}

export default Main;