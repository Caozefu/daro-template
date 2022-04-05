interface IStorageObject {
  [key: string]: any;
}

interface IStorageArray {
  [key: string]: Array<any>;
}

let id = 0;
let storage: Storage;

class Storage {
  private readonly id: number;
  private readonly _objectStorage: IStorageObject;
  private readonly _arrayStorage: IStorageArray;

  constructor() {
    this.id = ++id;
    this._objectStorage = {
      storageId: id,
    };
    this._arrayStorage = {};
  }

  /**
   * Set the value of type Object
   * @param key
   * @param value
   */
  public set<T>(key: string, value: T) {
    this._objectStorage[key] = value;
  }

  /**
   * Push values of type Array
   * @param key
   * @param values
   */
  public push<T>(key: string, values: Array<T>) {
    if (!this._arrayStorage[key]) this._arrayStorage[key] = [];
    this._arrayStorage[key].push(...values);
  }

  /**
   * Get value of object
   * @param key
   */
  public getObject<T>(key: string): T {
    if (this._objectStorage[key]) return this._objectStorage[key];
    return null;
  }

  /**
   * Get value of Array
   * @param key
   */
  public getArray<T>(key: string): Array<T> {
    if (this._arrayStorage[key]) return this._arrayStorage[key];
    return [];
  }

  public delete(key: string) {
    delete this._objectStorage[key];
    delete this._arrayStorage[key];
  }

  private clear() {
    // this._objectStorage = {};
    // this._arrayStorage = {};
  }

  saveDB() {
    // TODO sync to db
  }
}

storage = new Storage();
export default storage;

