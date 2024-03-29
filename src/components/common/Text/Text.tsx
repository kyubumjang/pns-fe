import { css } from '@emotion/react';

interface Props {
  children: string | JSX.Element;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
}

const Text = ({ children, tag, fontSize, fontWeight, color }: Props) => {
  const getTag = () => {
    if (tag === 'h1') return 'h1';
    if (tag === 'h2') return 'h2';
    if (tag === 'h3') return 'h3';
    if (tag === 'h4') return 'h4';
    if (tag === 'h5') return 'h5';
    if (tag === 'h6') return 'h6';
    if (tag === 'p') return 'p';
    if (tag === 'span') return 'span';
    return 'div';
  };
  const getStyle = () => {
    if (tag === 'h1')
      return css`
        font-size: 66px;
        font-weight: 700;
        line-height: 1.4;
        color: rgb(0, 0, 0);
        white-space: pre-line;
      `;
    if (tag === 'h2')
      return css`
        font-size: 50px;
        font-weight: 700;
        line-height: 1.4;
        color: #191f28;
        white-space: pre-line;
      `;
    if (tag === 'h3')
      return css`
        font-size: 28px;
        font-weight: 700;
        line-height: 1.4;
        color: #3c5fa6;
        white-space: pre-line;
      `;
    if (tag === 'h4')
      return css`
        font-size: 23px;
        font-weight: 600;
        line-height: 1.5;
        color: rgb(51, 61, 75);
        white-space: pre-line;
      `;
    if (tag === 'h5')
      return css`
        font-size: 22px;
        font-weight: 600;
        line-height: 1.5;
        color: rgb(107, 118, 132);
        white-space: pre-line;
      `;
    if (tag === 'h6')
      return css`
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        color: #333d4b;
        white-space: pre-line;
      `;
    if (tag === 'p')
      return css`
        font-size: 32px;
        font-weight: 700;
        line-height: 1.6;
        color: #191f28;
        white-space: pre-line;
      `;
    if (tag === 'span')
      return css`
        font-size: 23px;
        font-weight: 600;
        line-height: 1.5;
        color: rgb(51, 61, 75);
        white-space: pre-line;
      `;
    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      color: ${color};
      white-space: pre-line;
    `;
  };

  const Tag = getTag();
  const Style = getStyle();

  return <Tag css={Style}>{children}</Tag>;
};
export default Text;
