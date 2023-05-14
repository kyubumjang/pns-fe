import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '100px 200px',
  height: '600px',
  gap: '32px',
  backgroundColor: theme.color.whiteOpacity100,
});

export const InvestmentWrapper = styled('div')({
  display: 'flex',
  gap: '16px',
  backgroundColor: theme.color.whiteOpacity100,
});
