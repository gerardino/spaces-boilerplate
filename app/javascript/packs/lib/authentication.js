
const STORAGE_KEY = 'credentials';

class Credentials {
  constructor({ token, client, expiry, uid }) {
    this.token = token;
    this.client = client;
    this.expiry = expiry;
    this.uid = uid;
  }

  saveInLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this));
  }

  clearFromStorage() {
    localStorage.removeItem(STORAGE_KEY);
  }

  static getCredentialsFromStore() {
    try {
      const credentials = new Credentials(JSON.parse(localStorage.getItem(STORAGE_KEY)));
      if (credentials.token && credentials.uid && credentials.expiry) {
        return credentials;
      }
    } catch (error) { }

    return null;
  }

  static getCredentialsFromUrl() {
    // getting authentication token
    const searchParameters = new URLSearchParams(window.location.search);
    const token = searchParameters.get("auth_token");
    const client = searchParameters.get("client_id");
    const expiry = searchParameters.get("expiry");
    const uid = searchParameters.get("uid");

    if (token && client && expiry) {
      return new Credentials({ token, client, expiry, uid });
    } else {
      return null;
    }
  }

  static getAuthenticationCredentials() {
    const fromLocal = Credentials.getCredentialsFromStore();
    const fromSearch = Credentials.getCredentialsFromUrl();
    let credentials = null;

    if (fromLocal && fromSearch) {
      credentials = fromLocal.expiry > fromSearch.expiry ? fromLocal : fromSearch;
    } else {
      credentials = fromLocal || fromSearch;
    }

    if (credentials) {
      if (credentials.expiry < Math.floor((new Date()).getTime() / 1000)) {
        credentials.clearFromStorage();
        credentials = null;
      } else {
        credentials.saveInLocalStorage();
      }
    }

    return credentials;
  }
}

module.exports.Credentials = Credentials;
