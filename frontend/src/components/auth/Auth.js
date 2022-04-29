import './Auth.css';

const START_OAUTH = "/startOAuthFlow";

function Auth() {

    function redirect() {
        window.location.href = START_OAUTH
    }

    return (
        <div className='auth-container'>
            <button className="btn" onClick={redirect}>
                Get the access token!
            </button>
        </div>
    );
}

export default Auth;