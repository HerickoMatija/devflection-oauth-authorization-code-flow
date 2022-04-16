const REDIRECT_URI = "http://localhost:5000/authorizationCallback";

const AUTHORIZE_REQUEST_URL = "http://localhost:8083/auth/realms/master/protocol/openid-connect/auth?response_type=code&scope=devflectionPlayers&state=xyz&client_id=devflection-node-js&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
const TOKEN_ENDPOINT_URL = "http://localhost:8083/auth/realms/master/protocol/openid-connect/token";
const CLIENT_ID = "devflection-node-js";
const CLIENT_SECRET = "u2Y5vqEykBctmFhXnxzn0fp3s8H9rYXv";

exports.AUTHORIZE_REQUEST_URL = AUTHORIZE_REQUEST_URL;
exports.REDIRECT_URI = REDIRECT_URI;
exports.TOKEN_ENDPOINT_URL = TOKEN_ENDPOINT_URL;
exports.CLIENT_ID = CLIENT_ID;
exports.CLIENT_SECRET = CLIENT_SECRET;