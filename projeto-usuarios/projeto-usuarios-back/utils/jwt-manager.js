const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my_secret_key';

const generateTokenOnLogin = (username) => {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: 300 });
};

const validateToken = (token) => {
    let TOKEN_IS_VALID = undefined;
    
    try {
        if(!token) {
            throw new Error('Token not provided.');
        }

        TOKEN_IS_VALID = jwt.verify(token, SECRET_KEY);

    } catch (error) {
        TOKEN_IS_VALID = undefined;
    }

    return TOKEN_IS_VALID;
}

module.exports = { generateTokenOnLogin, validateToken };