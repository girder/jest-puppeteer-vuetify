import { testComponent } from './utils.js';
import { vAvatar } from '../lib/vuetify-xpaths';


describe('v-avatar', () => {
  beforeAll(() => {
    testComponent('v-avatar');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vAvatar());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vAvatar('AB'));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vAvatar({ cssClass: 'test' }));
  });
});
