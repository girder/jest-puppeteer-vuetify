import { testComponent } from './utils';
import {
  vListItem, vList, vIcon, vImg,
} from '../lib/vuetify-xpaths';

describe('v-list-item', () => {
  beforeAll(() => {
    // the v-list page also contains v-list-items
    testComponent('v-list');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListItem());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListItem('title-1a'));
    await expect(page).toContainXPath(vListItem({ content: 'title-1a' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListItem({ cssClass: 'test-list-item' }));
  });
  it('title', async () => {
    await expect(page).toContainXPath(vListItem({ title: 'title-1a' }));
  });
  it('subtitle', async () => {
    await expect(page).toContainXPath(vListItem({ subtitle: 'subtitle-1a' }));
  });
  it('action', async () => {
    await expect(page).toContainXPath(vListItem({ action: vIcon('mdi-tree') }));
  });
  it('avatar', async () => {
    await expect(page).toContainXPath(vListItem({ avatar: vImg('/harold.png') }));
  });
  it('icon', async () => {
    await expect(page).toContainXPath(vListItem({ icon: vIcon('mdi-home') }));
  });
  it('exists in a v-list', async () => {
    // Locate a v-list-item in a v-list
    await expect(page).toContainXPath(vList() + vListItem());
    // Locate a v-list which contains a v-list-item
    await expect(page).toContainXPath(vList(vListItem()));

    await expect(page).toContainXPath(vList() + vListItem({ title: 'title-1b' }));
    await expect(page).toContainXPath(vList(vListItem({ title: 'title-1b' })));
  });
});
