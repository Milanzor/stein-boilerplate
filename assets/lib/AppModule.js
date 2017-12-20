// Get DefaultModule
import {DefaultModule} from 'ck.js';

/**
 *
 */
export class AppModule extends DefaultModule {
    constructor() {
        super();
        if (typeof this.DOMReady === 'function') {
            this.subscribe('DOMReady', this.DOMReady);
        }
    }
}