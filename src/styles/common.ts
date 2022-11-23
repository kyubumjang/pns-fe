import styled from '@emotion/styled';

export const Container = styled('section')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const InnerContainer = styled('div')({
  position: 'relative',
});

export const BgWrapper = styled('div')({
  width: 'auto',
  height: '100vh',
});

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
