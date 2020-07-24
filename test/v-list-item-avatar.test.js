import { testComponent } from './utils';
import { vListItemAvatar, vListItem, vImg } from '../lib/vuetify-xpaths';

describe('v-list-item-avatar', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-item-avatars
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItemAvatar());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItemAvatar(vImg('/harold.png')));
    await expect(page).toContainXPath(vListItemAvatar({ content: vImg('/harold.png') }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItemAvatar({ cssClass: 'test-list-item-avatar' }));
  });
  it('exists in a v-list-item', async () => {
    // Locate a v-list-item-title in a v-list-item
    await expect(page).toContainXPath(vListItem() + vListItemAvatar());
    // Locate a v-list-item which contains a v-list-item-title
    await expect(page).toContainXPath(vListItem(vListItemAvatar()));

    await expect(page).toContainXPath(vListItem() + vListItemAvatar(vImg('/harold.png')));
    await expect(page).toContainXPath(vListItem(vListItemAvatar(vImg('/harold.png'))));
  });
});
