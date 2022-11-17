import styled from '@emotion/styled';

export const HeaderContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  left: 0;
  transition: background-color 0.2s ease;
  z-index: 50;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  max-width: calc(100% - 42px)
  min-height: 60px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-height: 100%;
  overflow-y: hidden;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  width: 100%:
  min-width: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 0 8px;
  color: ${(props) => props.theme.color.grey700};

  a {
    cursor: pointer;
    word-break: keep-all;
    white-space: nowrap;
    text-align: left;
    line-height: 20px;
    font-size: 15px;
    padding: 12px 10px;
    background-color: transparent;
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      background-color: ${(props) => props.theme.color.grey100};
    }
  }
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIconBtn = styled.button`
  display: flex;
  background-color: transparent;
  padding: 8px;
  border-radius: 50%;
  color: ${(props) => props.theme.color.grey700};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.grey100};
  }
`;

export const SignInBtn = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.color.blue500};
  margin: 0 8px;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.blue600};
  }
`;
