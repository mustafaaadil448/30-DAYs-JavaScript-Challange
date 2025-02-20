class EventEmitter {
    constructor() {
      this.events = {};
    }
      /**
       * @param {string} eventName
       * @param {Function} callback
       * @return {Object}
       */
      
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
  
      this.events[event].push(callback);
  
      return {
        unsubscribe: () => {
          this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
      };
    }
      
      /**
       * @param {string} eventName
       * @param {Array} args
       * @return {Array}
       */
      emit(event, args = []) {
      if (!this.events[event]) return [];
      return this.events[event].map(callback => callback(...args));
    }
  }