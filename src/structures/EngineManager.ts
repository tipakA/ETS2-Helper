import { stripIndent } from 'common-tags';
import { EngineData } from '../data/engines';
import { EngineModel } from '../util/interfaces';
import Engine from './Engine';
import Manager from './Manager';

export default class EngineManager extends Manager<EngineModel, Engine> {
  public constructor() {
    super();
  }

  public makeEngine(engine: EngineData, cache = true) {
    this.duplicateCheck(
      engine.model,
      (existing: Engine) =>
        stripIndent`    Duplicate found for Engine ${engine.model}:
        Existing Manufacturers: ${existing.manufacturers.join(', ')}.
        Incoming Manufacturers: ${engine.manufacturers.join(', ')}.
        Existing For: ${existing.for.join(', ')}.
        Incoming For: ${engine.for.join(', ')}.`,
    )

    const e = new Engine(engine);
    if (cache) this.set(engine.model, e);
    return e;
  }
}