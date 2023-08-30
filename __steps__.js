/**
 * JWT : secure your api
 * ----------------------------------
 *                   CREATE TOKEN
 * -------------------------------------
 * 1. client : after user login send user basic info to create token
 * 
 * 2. in the server side: install npm i jwtwebtoken
 * 3. import jwtwebtoken
 * 4. jwt.sign(payload(token info), secret, (expires))
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either httponly or localstoreage (second best options)
 * 
 * 7. use a general space onAuthStateChange > AuthProvider
 * 
 * 
 * ----------------------------------
 *                 SEND TOKEN TO SERVER SIDE
 * ----------------------------
 * 1. for sensitive api call ( ) send authorization haaders (
 * { authorization: `Bearer <token>})
 * 
 * ----------------------------------
 *               VERIFY TOKEN
 * ----------------------------------
 * 1. create a function called verifyJWT
 * 2. this function will have 3 params : req, res, next
 * 3. first check whether the authorization headers exists 
 * 4. if not send 401
 * 5. get the token out of the authorization headers
 * 6. call jwtVerify(token, secret, (error, decoded))
 * 7. if error send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next()  to go to the next function
 * ------------
 * 1. check whether token has the email that matches with the requested email
 * -------------------
 */