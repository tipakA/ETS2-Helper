import { EventEmitter } from 'events';
import DataManager from './DataManager';

export default class Application extends EventEmitter {
  #data = new DataManager();

  public get data() {
    return this.#data;
  }

  async #init() {
    await this.#data.init();
  }

  public async init() {
    try {
      await this.#init();
      this.emit('ready');
    } catch (err) {
      this.emit('error', err);
    }
  }
}