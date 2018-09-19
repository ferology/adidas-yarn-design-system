import zip from 'lodash.zip';
import * as iconsFile from '!raw-loader!../../src/assets/icons/yarn-icon.svg';

const names = iconsFile.match(/glyph-name="[\w\d-_]+"/gi)
  .map((className) => className.replace(/glyph-name="/, '').replace(/"/, ''));

const codes = iconsFile.match(/unicode="&#x[a-f\d]+;"/gi)
  .map((code) => `\\${ code.replace(/unicode="&#x/, '').replace(/;"/, '') }`);

export const icons = zip(names, codes.slice(+(codes.length > names.length)))
  .map((icon) => {
    const [ className, code ] = icon;

    return {
      className,
      code
    };
  });
