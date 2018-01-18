import {AppModule} from '../../lib/AppModule'

import './Core.scss';

export class Core extends AppModule {

    constructor() {
        super();

        // Ref to this
        let self = this;

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener("DOMContentLoaded", () => self.publish('DOMReady'));
    }
}


