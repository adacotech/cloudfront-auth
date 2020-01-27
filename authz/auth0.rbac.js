function isAuthorized(decoded, request, callback, unauthorized, internalServerError, config) {
  if (!decoded.permissions.incldes('access')) {
    unauthorized('Unauthorized', 'User ' + decoded.sub + ' is not permitted.', '', callback);
  }

  if (config.AUTH_REQUEST.audience !== decoded.aud) {
    unauthorized('Unauthorized', 'User ' + decoded.sub + ' is not permitted to' + config.AUTH_REQUEST.audience + '.', '', callback);
  }
  
  callback(null, request);
}

function getSubject(decoded) {
  return decoded.sub;
}

exports.isAuthorized = isAuthorized;
exports.getSubject = getSubject;
