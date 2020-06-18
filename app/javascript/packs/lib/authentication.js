
const STORAGE_KEY = 'credentials',
  READ_STORE_KEYS = {
    'auth_token': 'token',
    'client_id': 'client',
    'expiry': 'expiry',
    'uid': 'uid'
  },
  WRITE_STORE_KEYS = {
    'token': 'access_token',
    'client': 'client_id',
    'expiry': 'expiry',
    'uid': 'uid'
  }, WRITE_AXIOS_KEYS = {
    'token': 'access-token',
    'client': 'client',
    'expiry': 'expiry',
    'uid': 'uid'
  };

function translateHash({ map, payload }) {
  const translation = {};
  Object.keys(map).forEach(k => {
    const newK = map[k];
    translation[newK] = payload[k];
  });

  return translation;
}

class Credentials {
  constructor(payload) {
    const { token, client, expiry, uid } = translateHash({ map: READ_STORE_KEYS, payload });

    this.token = token;
    this.client = client;
    this.expiry = expiry;
    this.uid = uid;
  }

  isValid() {
    return this.token && this.uid && this.expiry
      && this.expiry > Math.floor((new Date()).getTime() / 1000);
  }

  toAxiosHash() {
    return translateHash({ map: WRITE_AXIOS_KEYS, payload: this });
  }

  toStoreHash() {
    return translateHash({ map: WRITE_STORE_KEYS, payload: this });
  }

  saveInLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this));
  }

  clearFromStorage() {
    localStorage.removeItem(STORAGE_KEY);
  }

  isNewerThan(credentials) {
    return this.expiry > credentials.expiry;
  }

  getNewest(credentials) {
    return this.isNewerThan(credentials) ? this : credentials;
  }

  static getCredentialsFromStore() {
    try {
      const credentials = new Credentials(JSON.parse(localStorage.getItem(STORAGE_KEY)));
      return credentials.isValid() ? credentials : null;
    } catch (error) { }

    return null;
  }

  static getCredentialsFromUrl() {
    // getting authentication token
    const searchParameters = new URLSearchParams(window.location.search);
    const token = searchParameters.get("auth_token");
    const client_id = searchParameters.get("client_id");
    const expiry = searchParameters.get("expiry");
    const uid = searchParameters.get("uid");

    const credentials = new Credentials({
      'auth_token': token,
      client_id,
      expiry,
      uid
    });

    return credentials.isValid() ? credentials : null;
  }
}

module.exports.Credentials = Credentials;
module.exports.STORAGE_KEY = STORAGE_KEY;