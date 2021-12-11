export default class AbstractStorageDriver {
  constructor() {
    if (this.constructor === AbstractStorageDriver) {
      throw new Error("Cannot make an instance of an abstract class.");
    }
  }

  /**
   * Store a key value pair in storage.
   * @param {String} key - value key
   * @param {String} value - value
   */
  set(key, value) {
    throw new Error("Cannot call abstract method.");
  }

  /**
   * Get a value from the store.
   * @param {String} key - value key
   * @returns {String} - value
   */
  get(key) {
    throw new Error("Cannot call abstract method.");
  }

  /**
   * Remove a value from the store.
   * @param {String} key - value key
   */
  remove(key) {
    throw new Error("Cannot call abstract method.");
  }
}
