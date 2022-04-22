export const REDIRECT_URI = "http://localhost:5000/authorizationCallback";
export const AUTHORIZE_REQUEST_URL = "http://localhost:8083/auth/realms/master/protocol/openid-connect/auth?response_type=code&scope=devflectionPlayers&state=xyz&client_id=devflection-node-js&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
export const TOKEN_ENDPOINT_URL = "http://keycloak:8080/auth/realms/master/protocol/openid-connect/token";
export const CLIENT_ID = "devflection-node-js";
export const CLIENT_SECRET = "xacIzbYJy29FfP3ESRXcGmTV7IJGDsPj";