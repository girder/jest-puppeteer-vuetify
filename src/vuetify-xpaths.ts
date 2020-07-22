import { XPath, Strings, contentAsPredicate, classAsPredicate, elementsAsPredicate, togglePredicate, defaultParam } from './vuetify-xpath-helpers';

function _vAvatar({ content, cssClass }: { content?: Strings, cssClass?: Strings}): XPath {
  return `//*${classAsPredicate('v-avatar', cssClass)}${contentAsPredicate(content)}`;
}
export const vAvatar = defaultParam(_vAvatar, 'content');


function _vBtn({ content, cssClass, disabled }: { content?: Strings, cssClass?: Strings, disabled?: boolean }): XPath {
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
    actions
  }: {
    content?: Strings,
    cssClass?: Strings,
    title?: Strings,
    subtitle?: Strings, 
    text?: Strings,
    actions?: Strings
  }): XPath {
  return `//*${classAsPredicate('v-card', cssClass)}${elementsAsPredicate('v-card', { title, subtitle, text, actions })}${contentAsPredicate(content)}`;
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


function _vListItem({ content, action, title, subtitle }: { content?: Strings, action?: Strings, title?: Strings, subtitle?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item')}${elementsAsPredicate('v-list-item', {
    content, action, title, subtitle,
  })}`;
}
export const vListItem = defaultParam(_vListItem, 'content');


function _vListItemTitle({ content, cssClass }: { content?: Strings, cssClass?: Strings }): XPath {
  return `//*${classAsPredicate('v-list-item__title', cssClass)}${contentAsPredicate(content)}`;
}
export const vListItemTitle = defaultParam(_vListItemTitle, 'content');


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