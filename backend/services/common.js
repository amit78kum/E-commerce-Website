const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGZmMzA5ZWUwODZhNDhiNDVkODJlNyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEyMzIxMjg5fQ.n2sEI5Prb_P1qMXRO4wZz6ni2ay-jqOpiXl8-d91JoA"
  //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGZmYjBhY2Q2ZDkxMjcyNmRlZjY5OSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEyMzIzMzM4fQ._UML0IFg4-SKVAkLTXT7MsahUxXMx9LuL1pKBc9Zz1g"
  //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmJjNjc3MGQ4ZDJhMGVhNzdlZmIyYyIsImlhdCI6MTcxMjA2NDk2MywiZXhwIjoxNzEyNDk2OTYzfQ.4r9jo70TK9uPEZJNYTn2_xnxn-9g0R_SAf4WCMBjBeg"
//token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTAwYTYzYjRmYWVjOTZkM2Q2NDU0MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEyMzI3MjY3fQ.XVe2B4w-SG-hNr4CbRVeoVN1o9YvRBEDUyDA__Y2hms"
token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTAxMjAxZDI1MTM2ODgyMmNhZjNhMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEyMzI5MjE3fQ.Eh4jrSwwke1udYGT-W3iigp5rG9xHnXUkaPUrwAiN1I"
  return token;
};