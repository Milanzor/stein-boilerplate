import AppModule from '../../lib/AppModule';
import Core from './Core';

const assert = require('assert');

describe('Core', () => {
    it('must an instance of AppModule', () => {
        assert.equal(new Core() instanceof AppModule, true);
    });
});
