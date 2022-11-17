import styled from '@emotion/styled';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 92%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  max-width: calc(100% - 42px)
  min-height: 60px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: hidden;
  justify-content: space-between;
  max-height: 100%;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 8px;
  color: ${(props) => props.theme.color.grey700};
  font-size: 15px;

  a {
    padding: 12px 10px;
    font-size: 15px;
    line-height: 20px;
    color: currentColor;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 0;
    cursor: pointer;
    background-color: transparent;
    text-align: left;
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
