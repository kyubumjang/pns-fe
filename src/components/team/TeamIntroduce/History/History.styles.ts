import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '100px 200px',
  height: '600px',
  gap: '32px',
  backgroundColor: theme.color.darkBackground,
});

export const YearWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '8px',
});

export const YearRowWrapper = styled('div')({
  display: 'flex',
  gap: '8px',
});
