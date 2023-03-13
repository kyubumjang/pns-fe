import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '1000px',
  padding: '200px',
  gap: '128px',
  backgroundColor: theme.color.white,
});

export const TitleWrapper = styled('div')({
  width: '800px',
});

export const ResultWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '600px',
  gap: '16px',
});

export const ResultRowWrapper = styled('div')({
  display: 'flex',
  gap: '64px',
});
