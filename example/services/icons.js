import zip from 'lodash.zip';
import * as iconsFile from '!raw-loader!../../src/assets/icons/yarn-icon.svg';

const names = iconsFile.match(/glyph-name="[\w\d-_]+"/gi)
  .map((className) => className.replace(/glyph-name="/, '').replace(/"/, ''));

const codes = iconsFile.match(/unicode="&#x[abcdef\d]+;"/gi)
  .map((code) => `\\${ code.replace(/unicode="&#x/, '').replace(/;"/, '') }`)
  .slice(1);

export const icons = zip(names, codes)
  .map((icon) => {
    const [ className, code ] = icon;

    return {
      className,
      code
    };
  });
