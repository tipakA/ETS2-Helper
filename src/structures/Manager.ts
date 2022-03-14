import Collection from '@discordjs/collection';

export default abstract class Manager<K, V> {
  #collection = new Collection<K, V>();

  public get collection() {
    return this.#collection;
  }

  protected set(key: K, value: V) {
    return this.#collection.set(key, value);
  }

  protected duplicateCheck(key: K, msg: string | ((...d: Array<V>) => string)): void {
    const dupe = this.#collection.get(key);
    if (!dupe) return;
    const errMsg = typeof msg === 'function' ? msg(dupe) : msg;
    throw errMsg;
  }
}
