/**
 * Created by thram on 8/04/17.
 */
import { omit, zipObject } from 'lodash';

export const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

export const pipe = (...functions) => data =>
  functions.reduce((value, func) => func(value), data);

export const getSignature = Component => (value = Component.defaultProps) => omit(value, ['children']);

export const Enum = (...keys) => zipObject(keys, keys);
