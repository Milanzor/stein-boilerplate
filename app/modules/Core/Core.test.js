const assert = require('assert');

import { AppModule } from '../../lib/AppModule'
import { Core } from './Core';

describe('Core', () => {
    it('must an instance of AppModule', () => {
        assert.equal(new Core instanceof AppModule, true);
    });
});
