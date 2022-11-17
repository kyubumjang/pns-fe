import styled from '@emotion/styled';

export interface StyleProps {
  width?: string;
  height?: string;
  fontSize?: string;
  buttonTheme?: string;
  round?: boolean;
  disabled?: boolean;
  outline?: boolean;
  noPointer?: boolean;
}

export const Button = styled('button')<StyleProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    color: '#fff',
    fontFamily: 'inherit',
    margin: '1px 0 0',
    padding: '11px 16px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    verticalAlign: 'middle',
    transition: 'background .2s ease,color .1s ease',
  },
  ({
    theme,
    width,
    height,
    fontSize,
    buttonTheme,
    round,
    disabled,
    outline,
    noPointer,
  }) => {
    const getBorderRadius = () => {
      if (round) return '50%';
      return theme.borderRadius;
    };
    const getColor = () => {
      if (buttonTheme === 'grey') return theme.color.grey700;
      if (buttonTheme === 'weakBlue') return theme.color.blue700;
      return theme.color.grey50;
    };
    const getBgColor = () => {
      if (disabled) return theme.color.grey200;
      if (buttonTheme === 'grey') return theme.color.grey100;
      if (buttonTheme === 'weakBlue') return theme.color.blue50;
      return theme.color.blue500;
    };
    const getHoverColor = () => {
      if (disabled) return 'none';
      if (buttonTheme === 'grey') return theme.color.grey300;
      if (buttonTheme === 'weakBlue') return theme.color.blue100;
      return theme.color.blue700;
    };
    const getActiveColor = () => {
      if (buttonTheme === 'grey') return theme.color.grey400;
      if (buttonTheme === 'weakBlue') return theme.color.blue200;
      if (disabled) return 'none';

      return theme.color.blue800;
    };
    return {
      width,
      height,
      fontSize,
      fontWeight: outline ? 400 : 600,
      border: outline ? `1px solid ${theme.color.grey200}` : 'none',
      color: outline ? theme.color.grey700 : getColor(),
      cursor: noPointer ? 'none' : 'pointer',
      borderRadius: outline ? '20px' : getBorderRadius(),
      backgroundColor: outline ? `#fff` : getBgColor(),
      '&:hover': {
        backgroundColor: outline ? theme.color.grey200 : getHoverColor(),
      },
      '&:active': {
        backgroundColor: outline ? theme.color.grey300 : getActiveColor(),
      },
    };
  },
);
