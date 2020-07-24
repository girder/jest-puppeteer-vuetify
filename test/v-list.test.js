import { testComponent } from './utils';
import { vList } from '../lib/vuetify-xpaths';

describe('v-list', () => {
  beforeAll(() => {
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vList());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vList('title-1a'));
    await expect(page).toContainXPath(vList({ content: 'title-1a' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vList({ cssClass: 'test-list' }));
  });
});
