const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my_secret_key';

const generateTokenOnLogin = (username) => {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: 300 });
};

const validateToken = (token) => {
    let TOKEN_IS_VALID = false;
    
    try {
        if(!token) {
            throw new Error('Token not provided.');
        }

        jwt.verify(token, SECRET_KEY);
        TOKEN_IS_VALID = true;

    } catch (error) {
        TOKEN_IS_VALID = false;
    }

    return TOKEN_IS_VALID;
}

module.exports = { generateTokenOnLogin, validateToken };