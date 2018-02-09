// Get DefaultModule
import { DefaultModule } from 'stein';

/**
 *
 */
export default class AppModule extends DefaultModule {
    constructor() {
        super();
        if (typeof this.DOMReady === 'function') {
            this.subscribe('DOMReady', this.DOMReady);
        }
    }
}
