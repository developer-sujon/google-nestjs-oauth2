class SessionHelper {
  static getAuthData() {
    return localStorage.getItem("authData")
      ? JSON.parse(localStorage.getItem("authData"))
      : null;
  }

  static setAuthData(authData) {
    return authData
      ? localStorage.setItem("authData", JSON.stringify(authData))
      : null;
  }
}

export default SessionHelper;
