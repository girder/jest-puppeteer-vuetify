import { testComponent } from './utils';
import { vListItemIcon, vListItem, vIcon } from '../lib/vuetify-xpaths';

describe('v-list-item-icon', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-item-icons
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItemIcon());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItemIcon(vIcon('mdi-home')));
    await expect(page).toContainXPath(vListItemIcon({ content: vIcon('mdi-home') }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItemIcon({ cssClass: 'test-list-item-icon' }));
  });
  it('exists in a v-list-item', async () => {
    // Locate a v-list-item-title in a v-list-item
    await expect(page).toContainXPath(vListItem() + vListItemIcon());
    // Locate a v-list-item which contains a v-list-item-title
    await expect(page).toContainXPath(vListItem(vListItemIcon()));

    await expect(page).toContainXPath(vListItem() + vListItemIcon(vIcon('mdi-home')));
    await expect(page).toContainXPath(vListItem(vListItemIcon(vIcon('mdi-home'))));
  });
});
