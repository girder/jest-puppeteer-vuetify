import { testComponent } from './utils';
import { vListItemTitle, vListItem } from '../lib/vuetify-xpaths';

describe('v-list-item-title', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-item-titles
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItemTitle());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItemTitle('title-1a'));
    await expect(page).toContainXPath(vListItemTitle({ content: 'title-1a' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItemTitle({ cssClass: 'test-list-item-title' }));
  });
  it('exists in a v-list-item', async () => {
    // Locate a v-list-item-title in a v-list-item
    await expect(page).toContainXPath(vListItem() + vListItemTitle());
    // Locate a v-list-item which contains a v-list-item-title
    await expect(page).toContainXPath(vListItem(vListItemTitle()));

    await expect(page).toContainXPath(vListItem() + vListItemTitle('title-1b'));
    await expect(page).toContainXPath(vListItem(vListItemTitle('title-1b')));
  });
});
