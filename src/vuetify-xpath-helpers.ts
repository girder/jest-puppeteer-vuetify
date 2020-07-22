export type XPath = string;
export type Predicate = string;
export type Strings = string | Strings[] | undefined;

export const xpathRegex = /\/\/[a-z*]+(\[.*\])*/;

export function isXPath(text: string): boolean {
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
export function contentAsPredicate(content?: Strings): Predicate {
  if (Array.isArray(content)) {
    return content.map((c) => contentAsPredicate(c)).join('');
  }
  if (typeof content === 'string') {
    if (isXPath(content)) {
      return `[.${content}]`;
    }
    return `[contains(.,"${content}")]`;
  }
  return '';
}

/**
 * Formats a list of CSS classes into XPath predicates.
 *
 * @param classes the CSS classes to form a predicate for
 */
export function classAsPredicate(...classes: Strings[]): Predicate {
  return classes.map((cssClass) => {
    if (Array.isArray(cssClass)) {
      return cssClass.map((c) => classAsPredicate(c)).join('');
    }
    if (typeof cssClass === 'string') {
      return `[contains(concat(" ",@class," "), " ${cssClass} ")]`;
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
export function elementAsPredicate(name: string, element: string, value: Strings): Predicate {
  return (value) ? `[.//*[@class="${name}__${element}"]${contentAsPredicate(value)}]` : '';
}

/**
 * Formats a list of elements of a component as a XPath predicate.
 * This is a wrapper for elementAsPredicate that handles multiple elements.
 *
 * @param name the name of the Vuetify component
 * @param values the contents of each element
 */
export function elementsAsPredicate<T extends { [key: string]: Strings }>(
  name: string,
  values: T,
): Predicate {
  return Object.keys(values).map((key) => elementAsPredicate(name, key, values[key])).join('');
}

/**
 * Generates a predicate for a togglable value (tile, disabled, etc.).
 * If the `toggleValue` is undefined, an empty string is returned.
 * If true, `trueExpression` is returned as a predicate.
 * IF false, `falseExpression` is returned as a predicate.
 *
 * @param toggleValue the toggle value to be tested.
 * @param trueExpression the expected expression to use if toggleValue is true.
 * @param falseExpression the expected expression to use if toggleValue is false.
 */
export function togglePredicate(
  toggleValue: boolean | undefined,
  trueExpression: string,
  falseExpression: string,
): Predicate {
  if (toggleValue === undefined) {
    return '';
  }
  if (toggleValue) {
    return `[${trueExpression}]`;
  }
  return `[${falseExpression}]`;
}

/**
 * Parses the argument to a wrapped vElement function.
 * If the argument is an object, it is passed directly to the wrapped function as destructured
 * arguments.
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
 * @param param the name of the default parameter to use
 */
export function defaultParam<T>(
  vFunction: (args: T) => XPath,
  param: keyof T,
) {
  return (args?: T | Strings): XPath => {
    if (typeof args === 'object' && !Array.isArray(args)) {
      return vFunction(args);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ret: any = {};
    ret[param] = args;
    return vFunction(ret);
  };
}
