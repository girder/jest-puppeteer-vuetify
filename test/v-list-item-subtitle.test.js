import { testComponent } from './utils';
import { vListItemSubtitle, vListItem } from '../lib/vuetify-xpaths';

describe('v-list-item-subtitle', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-item-subtitles
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItemSubtitle());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItemSubtitle('subtitle-1a'));
    await expect(page).toContainXPath(vListItemSubtitle({ content: 'subtitle-1a' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItemSubtitle({ cssClass: 'test-list-item-subtitle' }));
  });
  it('exists in a v-list-item', async () => {
    // Locate a v-list-item-subtitle in a v-list-item
    await expect(page).toContainXPath(vListItem() + vListItemSubtitle());
    // Locate a v-list-item which contains a v-list-item-subtitle
    await expect(page).toContainXPath(vListItem(vListItemSubtitle()));

    await expect(page).toContainXPath(vListItem() + vListItemSubtitle('subtitle-1b'));
    await expect(page).toContainXPath(vListItem(vListItemSubtitle('subtitle-1b')));
  });
});
