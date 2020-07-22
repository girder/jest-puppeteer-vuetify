import { testComponent } from './utils';
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
    await expect(page).toContainXPath(vAvatar({ content: 'AB' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vAvatar({ cssClass: 'test' }));
  });
});
