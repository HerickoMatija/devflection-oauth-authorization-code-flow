import './Main.css';
import Token from '../token/Token.js';

const ACCESS_TOKEN_URL = "localhost:5000/getAccessToken";
const REFRESH_TOKEN_URL = "localhost:5000/getRefreshToken";

function Main() {
    return (
        <div className='main-container'>
            <Token getTokenUrl={ACCESS_TOKEN_URL} name="Access token" />
            <Token getTokenUrl={REFRESH_TOKEN_URL} name="Refresh token" />
        </div>
    );
}

export default Main;