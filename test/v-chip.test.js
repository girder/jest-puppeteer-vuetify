import { testComponent } from './utils';
import { vChip } from '../lib/vuetify-xpaths';

describe('v-chip', () => {
  beforeAll(() => {
    testComponent('v-chip');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vChip());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vChip('content'));
    await expect(page).toContainXPath(vChip({ content: 'content' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vChip({ cssClass: 'test' }));
  });
});
