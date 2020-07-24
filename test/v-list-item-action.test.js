import { testComponent } from './utils';
import { vListItemAction, vListItem, vIcon } from '../lib/vuetify-xpaths';

describe('v-list-item-action', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-item-actions
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItemAction());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItemAction(vIcon('mdi-tree')));
    await expect(page).toContainXPath(vListItemAction({ content: vIcon('mdi-tree') }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItemAction({ cssClass: 'test-list-item-action' }));
  });
  it('exists in a v-list-item', async () => {
    // Locate a v-list-item-title in a v-list-item
    await expect(page).toContainXPath(vListItem() + vListItemAction());
    // Locate a v-list-item which contains a v-list-item-title
    await expect(page).toContainXPath(vListItem(vListItemAction()));

    await expect(page).toContainXPath(vListItem() + vListItemAction(vIcon('mdi-tree')));
    await expect(page).toContainXPath(vListItem(vListItemAction(vIcon('mdi-tree'))));
  });
});
