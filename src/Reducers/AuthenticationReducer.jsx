function authenticationReducer(stateAuth, actionAuth) {
  switch (actionAuth.type) {
    case "USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    case "GUEST_USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    case "USER_LOGOUT":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    default:
      return stateAuth;
  }
}

export default authenticationReducer;
