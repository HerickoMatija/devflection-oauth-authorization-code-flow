const CODE_CALLBACK_URL = encodeURIComponent("http://localhost:5000/authorizationCallback");

const AUTHORIZE_REQUEST_URL = "http://localhost:8083/auth/realms/master/protocol/openid-connect/auth?response_type=code&scope=devflectionPlayers&state=xyz&client_id=devflection-node-js&redirect_uri=" + CODE_CALLBACK_URL;

exports.AUTHORIZE_REQUEST_URL = AUTHORIZE_REQUEST_URL;