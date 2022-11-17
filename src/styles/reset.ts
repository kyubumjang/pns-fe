import { css } from '@emotion/react';

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  div {
    font-size: 100%;
    font-weight: 400;
    word-break: keep-all;
    white-space: pre-wrap;
  }
  html {
    box-sizing: border-box;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  div {
    display: block;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ol,
  ul,
  li {
    list-style: none;
    text-decoration: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
`;

export default reset;
