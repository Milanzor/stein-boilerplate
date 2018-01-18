import {AppModule} from "../../lib/AppModule";
import $ from 'jquery'

import './Core.scss';

export class Core extends AppModule {

    constructor() {
        super();

        let self = this;
        $(function () {
            self.publish('DOMReady');
        });
    }
}


