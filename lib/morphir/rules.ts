/**
 * Rule engine utilities ported from FINOS Morphir LCR sample.
 * Source: morphir-examples/src/Morphir/Sample/LCR/Rules.elm
 */

import type { Rule } from './types';

/** Returns true if the rule applies to the given item. */
export function isApplicable<T>(rule: Rule<T>, item: T): boolean {
  return rule.applies(item);
}

/** Returns the subset of rules that apply to the given item. */
export function findApplicable<T>(rules: Rule<T>[], item: T): Rule<T>[] {
  return rules.filter(r => r.applies(item));
}

/** Returns true if any rule in the list applies to the given item. */
export function isAnyApplicable<T>(rules: Rule<T>[], item: T): boolean {
  return rules.some(r => r.applies(item));
}

/** Returns the first rule with the given name, or undefined. */
export function findByName<T>(rules: Rule<T>[], name: string): Rule<T> | undefined {
  return rules.find(r => r.name === name);
}

/** Returns all rules with the given name. */
export function findAllByName<T>(rules: Rule<T>[], name: string): Rule<T>[] {
  return rules.filter(r => r.name === name);
}
