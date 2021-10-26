type EventHandler = (arg: any) => void;

export class Events {
  handlers: { [key: string]: EventHandler[] } = {};

  on(event: string, handler: EventHandler) {
    if (!event || !handler) return;
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(handler);
  }

  once(event: string, handler: EventHandler) {
    if (!event || !handler) return;
    if (!this.handlers[event]) this.handlers[event] = [];
    const onceDecorator = (arg: any) => {
      handler(arg);
      this.off(event, onceDecorator);
    }
    this.on(event, onceDecorator);
  }

  off(event: string, handler?: EventHandler) {
    if (!event || !Array.isArray(this.handlers[event])) return;
    if (!handler) {
      this.handlers[event] = [];
      return;
    }
    const index = this.handlers[event]
      .findIndex(currentHandler => currentHandler === handler);
    if (index === -1) return;
    this.handlers[event].splice(index, 1);
  }

  emit(event: string, data?: any) {
    if (!event || !Array.isArray(this.handlers[event])) return;
    this.handlers[event].forEach(handler => {
      handler(data);
    });
  }
}