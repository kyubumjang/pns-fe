import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid transparent;
  left: 0;
  padding: 50px 0 100px;
  background-color: ${(props) => props.theme.color.grey900};
  color: ${(props) => props.theme.color.grey400};
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  max-width: calc(100% - 42px)
  min-height: 60px;
  margin: 0 auto;
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 50px;
`;

export const FooterMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  width: 190px;
  font-size: 15px;
  line-height: 30px;
  color: ${(props) => props.theme.color.grey600};
`;

export const FooterMenuItem = styled.li`
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterMenuItemTitle = styled.div`
  color: ${(props) => props.theme.color.grey400};
  font-weight: bold;
  padding-bottom: 5px;
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  font-size: 13px;
  font-style: normal;
  padding-bottom: 5px;
  color: ${(props) => props.theme.color.grey600};

  strong {
    color: ${(props) => props.theme.color.grey400};
  }
`;

export const FooterSubMenuItems = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 24px 0 30px;
  gap: 34px;
  font-size: 13px;
  color: ${(props) => props.theme.color.grey600};
`;

export const FooterSubMenuItem = styled.li`
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  strong {
    &:hover {
      text-decoration: underline;
    }
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    color: ${(props) => props.theme.color.grey400};
  }
`;
