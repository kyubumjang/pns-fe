import { css } from '@emotion/react';

import reset from './reset';

const globalStyles = css`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'IBM Plex Sans KR', -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100vh;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;

export default globalStyles;
