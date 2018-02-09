import AppModule from '../../lib/AppModule';

import './Core.scss';

export default class Core extends AppModule {
    constructor() {
        super();

        // Ref to this
        const self = this;

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener('DOMContentLoaded', () => self.publish('DOMReady'));
    }
}
