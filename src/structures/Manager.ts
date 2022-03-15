import Collection, { ReadonlyCollection } from '@discordjs/collection';

export default abstract class Manager<K, V> {
  #collection = new Collection<K, V>();

  public get collection() {
    return {
      at: (index: number) => this.#collection.at(index),
      clone: () => this.#collection.clone(),
      difference: (other: ReadonlyCollection<K, V>) => this.#collection.difference(other),
      entries: () => this.#collection.entries(),
      equals: (collection: ReadonlyCollection<K, V>) => this.#collection.equals(collection),
      every: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.every(fn), // eslint-disable-line no-unused-vars
      filter: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.filter(fn), // eslint-disable-line no-unused-vars
      find: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.find(fn), // eslint-disable-line no-unused-vars
      findKey: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.findKey(fn), // eslint-disable-line no-unused-vars
      first: () => this.#collection.first(),
      firstKey: () => this.#collection.firstKey(),
      get: (key: K) => this.#collection.get(key),
      has: (key: K) => this.#collection.has(key),
      hasAll: (keys: Array<K>) => this.#collection.hasAll(...keys),
      hasAny: (keys: Array<K>) => this.#collection.hasAny(...keys),
      intersect: (other: ReadonlyCollection<K, V>) => this.#collection.intersect(other),
      keyAt: (index: number) => this.#collection.keyAt(index),
      keys: () => this.#collection.keys(),
      last: () => this.#collection.last(),
      lastKey: () => this.#collection.lastKey(),
      map: <T>(fn: (value: V, key: K, collection: Collection<K, V>) => T) => this.#collection.map(fn), // eslint-disable-line no-unused-vars
      mapValues: <T>(fn: (value: V, key: K, collection: Collection<K, V>) => T) => this.#collection.mapValues(fn), // eslint-disable-line no-unused-vars
      partition: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.partition(fn), // eslint-disable-line no-unused-vars
      random: () => this.#collection.random(),
      randomKey: () => this.#collection.randomKey(),
      reduce: <T>(fn: (accumulator: T, value: V, key: K, collection: Collection<K, V>) => T, initialValue: T) => this.#collection.reduce(fn, initialValue), // eslint-disable-line no-unused-vars
      some: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.some(fn), // eslint-disable-line no-unused-vars
      sorted: (fn: (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number) => this.#collection.sorted(fn), // eslint-disable-line no-unused-vars
      toJSON: () => this.#collection.toJSON(),
      values: () => this.#collection.values(),
    };
  }

  protected get data() {
    return {
      clear: () => this.#collection.clear(),
      concat: (...collections: Array<ReadonlyCollection<K, V>>) => this.#collection.concat(...collections),
      delete: (key: K) => this.#collection.delete(key),
      reverse: () => this.#collection.reverse(),
      set: (key: K, value: V) => this.#collection.set(key, value),
      sort: (fn: (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number) => this.#collection.sort(fn), // eslint-disable-line no-unused-vars
      sweep: (fn: (value: V, key: K, collection: Collection<K, V>) => boolean) => this.#collection.sweep(fn), // eslint-disable-line no-unused-vars
    };
  }

  public first() {
    return this.#collection.first();
  }

  public get(key: K) {
    return this.#collection.get(key);
  }

  public has(key: K) {
    return this.#collection.has(key);
  }

  public last() {
    return this.#collection.last();
  }

  public random() {
    return this.#collection.random();
  }

  protected duplicateCheck(key: K, msg: string | ((...d: Array<V>) => string)): void { // eslint-disable-line no-unused-vars
    const dupe = this.#collection.get(key);
    if (!dupe) return;
    const errMsg = typeof msg === 'function' ? msg(dupe) : msg;
    throw errMsg;
  }
}
