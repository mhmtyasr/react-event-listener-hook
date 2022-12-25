import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

export function removeEvent(type: string, callback: (...args: any[]) => void) {
  eventEmitter.removeListener(type, callback);
}

export function subscribeEvent(
  type: string,
  callback: (...args: any[]) => void
) {
  eventEmitter.on(type, callback);
}

