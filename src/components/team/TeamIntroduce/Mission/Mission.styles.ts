import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1000px',
  padding: '200px',
  gap: '128px',
  backgroundColor: theme.color.whiteOpacity200,
});

export const TeamMissionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '780px',
  height: '400px',
  padding: '60px 90px',
  margin: '0 auto',
  gap: '16px',
  borderRadius: '16px',
  backgroundColor: `rgba(26, 30, 36, 0.65)`,
  backdropFilter: 'blur(30px)',
});
