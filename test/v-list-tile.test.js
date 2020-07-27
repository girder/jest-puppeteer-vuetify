import { vListTile, vImg } from '../lib/vuetify-xpaths';

describe('v-list-tile', () => {
  beforeAll(async () => {
    // v-list-tiles are a Vuetify 1.5 thing
    // Until we have a test project, use the documentation page
    await page.goto('https://v15.vuetifyjs.com/en/components/lists');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vListTile());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vListTile('Oui oui'));
    await expect(page).toContainXPath(vListTile({ content: 'Oui oui' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vListTile({ cssClass: 'v-list__tile--avatar' }));
  });
  it('title', async () => {
    await expect(page).toContainXPath(vListTile({ title: 'Oui oui' }));
  });
  it('subtitle', async () => {
    await expect(page).toContainXPath(vListTile({ subtitle: 'Sandra Adams' }));
  });
  it('avatar', async () => {
    await expect(page).toContainXPath(vListTile({ avatar: vImg() }));
  });
});
