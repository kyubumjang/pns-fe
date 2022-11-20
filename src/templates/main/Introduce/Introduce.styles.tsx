import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const IntroduceContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const SloganContainer = styled('div')({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
});

export const ImgBgWrapper = styled('div')({
  width: 'auto',
  height: '100vh',
  zIndex: -1,
});

export const ImgGradientWrapper = styled('div')({
  position: 'absolute',
  top: '0px',
  left: 0,
  width: '100%',
  height: '500px',
  background:
    'linear-gradient(180deg, white 0%, white 50px, rgba(255, 255, 255, 0) 100%)',
  zIndex: -1,
});

export const SloganContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  animation: '0.5s ease-in-out',
});

export const SloganInnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  justify-content: flex-start;
  align-items: center;
`;

export const SloganBtnContainer = styled('button')`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: 4px;
`;

export const LinkContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  line-height: 26px;
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
  background-image: none;
  background-color: ${(props) => props.theme.color.greyOpacity800};
  padding: 11px 22px;
  border: 0 solid transparent;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.1s ease;
  white-space: nowrap;
  z-index: 1;
  gap: 8px;
  &:hover {
    background-color: ${(props) => props.theme.color.grey700};
  }
`;

export const ArrowDownBtn = styled('button')`
  background: none;
  border: 0px;
  padding: 0px;
  outline: none;
  cursor: pointer;
  margin-bottom: 30px;
`;

const bounce = keyframes`
    from, 20%, 53%, 80%, to {
      transform: translate3d(0,0,0);
    }

    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0,-4px,0);
    }
  `;

export const BtnWrapper = styled('div')(
  {
    width: '50px',
    height: '50px',
    animation: `${bounce} 2s ease infinite`,
  },
  ({ theme }) => {
    return {
      color: theme.color.grey500,
    };
  },
);

export const DescriptionContainer = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '200px 0',
  },
  ({ theme }) => {
    return {
      backgroundColor: theme.color.grey50,
    };
  },
);
