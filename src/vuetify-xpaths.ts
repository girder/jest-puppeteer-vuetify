import {
  XPath,
  Strings,
  contentAsPredicate,
  classAsPredicate,
  elementsAsPredicate,
  togglePredicate, defaultParam,
} from './vuetify-xpath-helpers';

function _vAvatar({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-avatar', cssClass)}${contentAsPredicate(content)}`;
}
export const vAvatar = defaultParam(_vAvatar, 'content');

function _vBtn({
  content,
  cssClass,
  disabled,
}: {
  content?: Strings,
  cssClass?: Strings,
  disabled?: boolean
}): XPath {
  const disabledPredicate = togglePredicate(disabled, '@disabled="disabled"', 'not(@disabled)');
  return `//*${classAsPredicate('v-btn', cssClass)}${contentAsPredicate(content)}${disabledPredicate}`;
}
export const vBtn = defaultParam(_vBtn, 'content');

function _vCard({
  content,
  cssClass,
  title,
  subtitle,
  text,
  actions,
}: {
  content?: Strings,
  cssClass?: Strings,
  title?: Strings,
  subtitle?: Strings,
  text?: Strings,
  actions?: Strings
}): XPath {
  return `//*${classAsPredicate('v-card', cssClass)}${elementsAsPredicate('v-card', {
    title, subtitle, text, actions,
  })}${contentAsPredicate(content)}`;
}
export const vCard = defaultParam(_vCard, 'content');

function _vChip({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-chip', cssClass)}[*[@class="v-chip__content"]${contentAsPredicate(content)}]`;
}
export const vChip = defaultParam(_vChip, 'content');

function _vIcon({ icon, cssClass }: { icon?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-icon', icon, cssClass)}`;
}
export const vIcon = defaultParam(_vIcon, 'icon');

function _vImg({ src, cssClass }: { src?: Strings, cssClass?: Strings }): XPath {
  // v-img embeds the src into a background-image css style:
  // <div style="background-image: url("http://localhost:8080/harold.png");">
  // To account for relative paths, we search the style tag for the URL, plus the next 3 characters
  const srcPredicate = (src) ? `[*${classAsPredicate('v-image__image')}[contains(@style, '${src}");')]]` : '';
  return `//*${classAsPredicate('v-image', cssClass)}${srcPredicate}`;
}
export const vImg = defaultParam(_vImg, 'src');

function _vList({ content, cssClass }: {content?: Strings, cssClass?: Strings}) {
  return `//*${classAsPredicate('v-list', cssClass)}${contentAsPredicate(content)}`;
}
export const vList = defaultParam(_vList, 'content');

function _vListItem({
  content,
  cssClass,
  title,
  subtitle,
  action,
  avatar,
  icon,
}: {
  content?: Strings,
  cssClass?: Strings,
  title?: Strings,
  subtitle?: Strings,
  action?: Strings,
  avatar?: Strings,
  icon?: Strings,
}): XPath {
  return `//*${classAsPredicate('v-list-item', cssClass)}${elementsAsPredicate('v-list-item', {
    content, title, subtitle, action, avatar, icon,
  })}`;
}
export const vListItem = defaultParam(_vListItem, 'content');

function _vListItemTitle({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item__title', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemTitle = defaultParam(_vListItemTitle, 'content');

function _vListItemSubtitle({
  content,
  cssClass,
}: {
  content?: Strings,
  cssClass?: Strings
}): XPath {
  return `//*${classAsPredicate('v-list-item__subtitle', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemSubtitle = defaultParam(_vListItemSubtitle, 'content');

function _vListItemAction({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item__action', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemAction = defaultParam(_vListItemAction, 'content');

function _vListItemAvatar({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item__avatar', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemAvatar = defaultParam(_vListItemAvatar, 'content');

function _vListItemIcon({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item__icon', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemIcon = defaultParam(_vListItemIcon, 'content');

function _vListItemGroup({
  header,
  items,
  cssClass,
}: {
  header?: Strings,
  items?: Strings,
  cssClass?: Strings
}): XPath {
  return `//*${classAsPredicate('v-list-item-group', cssClass)}${elementsAsPredicate('v-list-group', { header, items })}`;
}
export const vListItemGroup = defaultParam(_vListItemGroup, 'items');

/* TODO this is a Vuetify 1.5 component */
function _vListTile({
  content,
  cssClass,
  title,
  subtitle,
  action,
  avatar,
}: {
  content?: Strings,
  cssClass?: Strings,
  title?: Strings,
  subtitle?: Strings,
  action?: Strings,
  avatar?: Strings,
}): XPath {
  return `//*${classAsPredicate('v-list__tile', cssClass)}${elementsAsPredicate('v-list__tile', {
    content, title, 'sub-title': subtitle, action, avatar,
  })}`;
}
export const vListTile = defaultParam(_vListTile, 'content');

function _vTextarea({ label, cssClass }: { label?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-textarea', cssClass)}//*[label[contains(text(),"${label}")]]//textarea`;
}
export const vTextarea = defaultParam(_vTextarea, 'label');

function _vTextField({ label, cssClass }: { label?: Strings, cssClass?: Strings }): XPath {
  const labelPredicate = (label) ? `[.//*[label[contains(text(),"${label}")]]]` : '';
  return `//*${classAsPredicate('v-text-field', cssClass)}${labelPredicate}//input`;
}
export const vTextField = defaultParam(_vTextField, 'label');

function _vToolbar({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-toolbar', cssClass)}[*[@class="v-toolbar__content"]${contentAsPredicate(content)}]`;
}
export const vToolbar = defaultParam(_vToolbar, 'content');
