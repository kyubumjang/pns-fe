import styled from '@emotion/styled';

interface InfoTitleProps {
  alignItems: 'flex-start' | 'flex-end';
}

export const Container = styled('div')<InfoTitleProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  ({ alignItems }) => {
    return {
      alignItems: alignItems,
    };
  },
);

export const SubTitleWrapper = styled('div')({
  display: 'flex',
  width: '400px',
});
