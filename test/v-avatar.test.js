import { testComponent } from './utils.js';
import { vAvatar } from '../lib/vuetify-xpaths';


describe('v-avatar', () => {
  beforeAll(() => {
    testComponent('v-avatar');
  });
  it('content', async () => {
    await expect(page).toContainXPath(vAvatar('AB'));
  });
});
