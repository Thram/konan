/**
 * Created by thram on 8/04/17.
 */
import { set, get, isString } from 'lodash';
const CONTENT_ID = 'konan_content';
let content;
const initContent = () => {
  if (!content) {
    try {
      content = JSON.parse(window.localStorage.getItem(CONTENT_ID)) || {};
    } catch (e) {
      content = {};
    }
  }
};
const saveContent = () => window.localStorage.setItem(CONTENT_ID, JSON.stringify(content));

export const getContent = (path) => {
  initContent();
  return path ? get(content, path) : content;
};

export const setContent = (path, value) => {
  initContent();
  if (isString(path)) {
    set(content, path, value);
  } else {
    content = path;
  }
  saveContent();
  return content;
};

