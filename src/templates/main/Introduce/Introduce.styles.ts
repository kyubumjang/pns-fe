import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const IntroduceContainer = styled('div')({
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '200px',
  },
  ({ theme }) => {
    return {
      backgroundColor: theme.color.grey50,
    };
  },
);
