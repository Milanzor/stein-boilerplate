import {AppModule} from "AppModule";
import $ from 'jquery'

export class Core extends AppModule {

    constructor() {
        super();

        let self = this;
        $(function () {
            self.publish('DOMReady');
        });
    }
}


