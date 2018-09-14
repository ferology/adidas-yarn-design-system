import { style } from '~/services/style';

let mobileScreenWidth = 0;

if (process.browser) {
  const mobileBreakpoint = parseInt(style.variables['screen-xs-max'], 10);
  const fontSize = parseInt(style.typography['font-size-base'], 10);

  mobileScreenWidth = fontSize * mobileBreakpoint;
}

export function isMobile() {
  let mobile = false;

  if (process.browser) {
    const { clientWidth } = window.document.body;

    mobile = clientWidth <= mobileScreenWidth;
  }

  return mobile;
}
