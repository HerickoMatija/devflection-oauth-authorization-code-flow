import './Auth.css';

const START_OAUTH = "http://localhost:5000/startOAuthFlow"

function Auth() {

    function redirect() {
        window.location.href = START_OAUTH
    }

    return (
        <div className='auth-container'>
            <button className="auth-btn" onClick={redirect}>
                Get the access token!
            </button>
        </div>
    );
}

export default Auth;