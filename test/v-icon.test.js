import { testComponent } from './utils';
import { vIcon } from '../lib/vuetify-xpaths';

describe('v-icon', () => {
  beforeAll(() => {
    testComponent('v-icon');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vIcon());
  });
  it('icon', async () => {
    await expect(page).toContainXPath(vIcon('mdi-jellyfish'));
    await expect(page).toContainXPath(vIcon({ icon: 'mdi-jellyfish' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vIcon({ cssClass: 'test' }));
  });
});
