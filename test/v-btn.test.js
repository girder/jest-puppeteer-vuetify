import { testComponent } from './utils.js';
import { vBtn } from '../lib/vuetify-xpaths';


describe('v-btn', () => {
  beforeAll(() => {
    testComponent('v-btn');
  });
  it('exists', async () => {
    await expect(page).toContainXPath(vBtn());
  });
  it('content', async () => {
    await expect(page).toContainXPath(vBtn('button'));
  });
  it('class', async () => {
    await expect(page).toContainXPath(vBtn({ cssClass: 'test' }));
  });
  it('disabled', async () => {
    await expect(page).toContainXPath(vBtn({ content: 'disabled', disabled: true }));
    await expect(page).not.toContainXPath(vBtn({ content: 'button', disabled: true }));
  });
  it('not disabled', async () => {
    await expect(page).toContainXPath(vBtn({ content: 'button', disabled: false }));
    await expect(page).not.toContainXPath(vBtn({ content: 'disabled', disabled: false }));
  });
});
