/**
 * Created by thram on 9/04/17.
 */
import { assign } from 'lodash';
import { register, createDict, dispatch } from 'thrux';
import { getContent, setContent } from '../api/data';


const content = {
  INIT: createDict(() => ({ content: getContent() })),
  SET: createDict(({ name, value }, state) =>
    assign({}, state, { content: setContent(name, value) })),
  SELECT: createDict(({ name, value }, state) =>
    assign({}, state, { selected: { name, records: value } })),
};

register({ content });

export const set = (name, value) => dispatch('content:SET', { name, value });

export const select = (name, value) => dispatch('content:SELECT', { name, value });
