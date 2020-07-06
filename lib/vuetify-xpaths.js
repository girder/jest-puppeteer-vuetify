"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vToolbar = exports.vTextField = exports.vTextarea = exports.vListItemTitle = exports.vListItem = exports.vIcon = exports.vChip = exports.vCard = exports.vBtn = exports.vAvatar = void 0;
var xpathRegex = /\/\/[a-z*]+(\[.*\])*/;
function isXPath(text) {
    return xpathRegex.test(text);
}
/**
 * Formats an argument into one or more XPath predicates.
 * If the argument is a valid XPath, then the predicate will match all elements that contain the
 * element identified by that XPath.
 * If the argument is any other string, then the predicate will match all elements that contain
 * that string in their text bodies.
 * If the argument is an array, the function is called recursively and multiple predicates are
 * returned in the same string.
 *
 * @param content the content of the element to form a predicate for
 */
function contentAsPredicate(content) {
    if (Array.isArray(content)) {
        return content.map(function (c) { return contentAsPredicate(c); }).join('');
    }
    if (typeof content === 'string') {
        if (isXPath(content)) {
            return "[." + content + "]";
        }
        return "[contains(text(),\"" + content + "\")]";
    }
    return '';
}
/**
 * Formats a list of CSS classes into XPath predicates.
 *
 * @param classes the CSS classes to form a predicate for
 */
function classAsPredicate() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.map(function (cssClass) {
        if (Array.isArray(cssClass)) {
            return cssClass.map(function (c) { return classAsPredicate(c); }).join('');
        }
        if (typeof cssClass === 'string') {
            return "[contains(concat(\" \",@class,\" \"), \" " + cssClass + " \")]";
        }
        return '';
    }).join('');
}
/**
 * Formats an element of a component as a XPath predicate.
 * Vuetify components will generally have this structure for sub-elements,
 * so this helper saves a lot of boilerplate.
 * For example:
 * <v-foo>
 *   <div class="v-foo__title" ... />
 *   <div class="v-foo__contents" ... />
 * </v-foo>
 *
 * @param name the name of the Vuetify component
 * @param element the name of the element
 * @param value the contents of the element
 */
function elementAsPredicate(name, element, value) {
    return (value) ? "[.//*[@class=\"" + name + "__" + element + "\"]" + contentAsPredicate(value) + "]" : '';
}
/**
 * Formats a list of elements of a component as a XPath predicate.
 * This is a wrapper for elementAsPredicate that handles multiple elements.
 *
 * @param name the name of the Vuetify component
 * @param values the contents of each element
 */
function elementsAsPredicate(name, values) {
    return Object.keys(values).map(function (key) { return elementAsPredicate(name, key, values[key]); }).join('');
}
/**
 * Parses the argument to a wrapped vElement function.
 * If the argument is an object, it is passed directly to the wrapped function as destructured arguments.
 * Otherwise, the argument is wrapped in an object, keyed by a default parameter.
 *
 * For this example function definition:
 *
 * function _vFoo({content, cssClass}) { ... }
 * export const vFoo = defaultParam(_vFoo, 'content')
 *
 * This wrapper allows calls like this to be mapped like so:
 *
 * vFoo() => vFoo({})
 * vFoo('abc') => vFoo({content: 'abc'})
 * vFoo(['abc', 'xyz']) => vFoo({content: ['abc, 'xyz']})
 * vFoo({cssClass: 'test'}) => vFoo({cssClass: 'test'}) // no change
 *
 * @param vFunction the XPath generator function to wrap
 * @param defaultParam the name of the default parameter to use
 */
function defaultParam(vFunction, defaultParam) {
    return function (args) {
        if (typeof args === 'object' && !Array.isArray(args)) {
            return vFunction(args);
        }
        var ret = {};
        ret[defaultParam] = args;
        return vFunction(ret);
    };
}
function _vAvatar(_a) {
    var content = _a.content, cssClass = _a.cssClass;
    return "//div" + classAsPredicate('v-avatar', cssClass) + "[span" + contentAsPredicate(content) + "]";
}
exports.vAvatar = defaultParam(_vAvatar, 'content');
function _vBtn(_a) {
    var content = _a.content, cssClass = _a.cssClass;
    return "//*" + classAsPredicate('v-btn', cssClass) + "[span" + contentAsPredicate(content) + "]";
}
exports.vBtn = defaultParam(_vBtn, 'content');
function _vCard(_a) {
    var content = _a.content, cssClass = _a.cssClass, title = _a.title, actions = _a.actions;
    return "//div" + classAsPredicate('v-card', cssClass) + elementsAsPredicate('v-card', { title: title, actions: actions }) + contentAsPredicate(content);
}
exports.vCard = defaultParam(_vCard, 'content');
function _vChip(_a) {
    var content = _a.content, cssClass = _a.cssClass;
    return "//*" + classAsPredicate('v-chip', cssClass) + "[*[@class=\"v-chip__content\"]" + contentAsPredicate(content) + "]";
}
exports.vChip = defaultParam(_vChip, 'content');
function _vIcon(_a) {
    var icon = _a.icon, cssClass = _a.cssClass;
    return "//*" + classAsPredicate('v-icon', icon, cssClass);
}
exports.vIcon = defaultParam(_vIcon, 'icon');
function _vListItem(_a) {
    var content = _a.content, action = _a.action, title = _a.title, subtitle = _a.subtitle;
    return "//*" + classAsPredicate('v-list-item') + elementsAsPredicate('v-list-item', {
        content: content, action: action, title: title, subtitle: subtitle,
    });
}
exports.vListItem = defaultParam(_vListItem, 'content');
function _vListItemTitle(_a) {
    var content = _a.content, cssClass = _a.cssClass;
    return "//div" + classAsPredicate('v-list-item__title', cssClass) + contentAsPredicate(content);
}
exports.vListItemTitle = defaultParam(_vListItemTitle, 'content');
function _vTextarea(_a) {
    var label = _a.label, cssClass = _a.cssClass;
    return "//div" + classAsPredicate('v-textarea', cssClass) + "//div[label[contains(text(),\"" + label + "\")]]//textarea";
}
exports.vTextarea = defaultParam(_vTextarea, 'label');
function _vTextField(_a) {
    var label = _a.label, cssClass = _a.cssClass;
    var labelPredicate = (label) ? "[.//div[label[contains(text(),\"" + label + "\")]]]" : '';
    return "//div" + classAsPredicate('v-text-field', cssClass) + labelPredicate + "//input";
}
exports.vTextField = defaultParam(_vTextField, 'label');
function _vToolbar(_a) {
    var content = _a.content, cssClass = _a.cssClass;
    return "//*" + classAsPredicate('v-toolbar', cssClass) + "[*[@class=\"v-toolbar__content\"]" + contentAsPredicate(content) + "]";
}
exports.vToolbar = defaultParam(_vToolbar, 'content');
