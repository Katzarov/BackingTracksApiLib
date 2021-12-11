import AbstractStorageDriver from "./AbstractStorageDriver.js";

export default class LocalStorageDriver extends AbstractStorageDriver {
  constructor() {
    super();
    this.localStorage = window.localStorage;
    this.prefix = "_backingtracks_";
  }

  /**
   * @throws {Error} - when there is a failure writting to local storage. Most likely due to not enough free space.
   * @inheritDoc
   */
  set(key, value) {
    try {
      const prefixedKey = this._getPrefixedKey(key);

      this.localStorage.setItem(prefixedKey, value);

      // verify key value pair was set correctly
      if (this.get(key) !== value) {
        throw new Error("Key value pair not set successfully.");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error writting to Local Storage.");
    }
  }

  /**
   * @inheritDoc
   */
  get(key) {
    const prefixedKey = this._getPrefixedKey(key);

    return this.localStorage.getItem(prefixedKey);
  }

  /**
   * @param {String} key - key
   * @returns {String} - key with appended prefix
   */
  _getPrefixedKey(key) {
    return `${this.prefix}${key}`;
  }

  /**
   * @inheritDoc
   */
  remove(key) {
    return this.localStorage.removeItem(key);
  }
}
