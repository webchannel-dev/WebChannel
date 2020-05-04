import {
    renderStyle,
    beforeEachTest,
    afterEachTest
} from '../utils/testWrapper';
import Light from '../styles/themes/light/Light';

import CssReset from './CssReset';

describe('Container', () => {
    beforeEach(() => beforeEachTest());
    afterEach(() => afterEachTest());

    it('match styles', () => {
        expect(
            renderStyle(CssReset.globalStyle, { theme: Light })
        ).toMatchSnapshot();
    });
});
