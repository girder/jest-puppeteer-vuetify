import { testComponent } from './utils';
import { vCard, vBtn } from '../lib/vuetify-xpaths';

describe('v-card', () => {
  beforeAll(() => {
    testComponent('v-card');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vCard());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vCard('title'));
    await expect(page).toContainXPath(vCard('subtitle'));
    await expect(page).toContainXPath(vCard('text'));
    await expect(page).toContainXPath(vCard('actions'));
    await expect(page).toContainXPath(vCard('content'));
    await expect(page).toContainXPath(vCard({ content: 'content' }));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vCard({ cssClass: 'test' }));
  });
  it('title', async () => {
    await expect(page).toContainXPath(vCard({ title: 'title' }));
    await expect(page).not.toContainXPath(vCard({ title: 'content' }));
    await expect(page).toContainXPath(vCard({ cssClass: 'buttons', title: vBtn('title-button') }));
  });
  it('subtitle', async () => {
    await expect(page).toContainXPath(vCard({ subtitle: 'subtitle' }));
    await expect(page).not.toContainXPath(vCard({ subtitle: 'content' }));
    await expect(page).toContainXPath(vCard({ cssClass: 'buttons', subtitle: vBtn('subtitle-button') }));
  });
  it('text', async () => {
    await expect(page).toContainXPath(vCard({ text: 'text' }));
    await expect(page).not.toContainXPath(vCard({ text: 'content' }));
    await expect(page).toContainXPath(vCard({ cssClass: 'buttons', text: vBtn('text-button') }));
  });
  it('actions', async () => {
    await expect(page).toContainXPath(vCard({ actions: 'actions' }));
    await expect(page).not.toContainXPath(vCard({ actions: 'content' }));
    await expect(page).toContainXPath(vCard({ cssClass: 'buttons', actions: vBtn('actions-button') }));
  });
});
