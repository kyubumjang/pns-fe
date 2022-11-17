import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';

import Logo from '@/assets/icons/logo.svg';

import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.MenuContainer>
          <S.MenuItems>
            <S.MenuItem>
              <Link href='/team'>회사 소개</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href='/product'>제품 소개</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href='/certified'>인증</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href='/support'>고객센터</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href='/faq'>자주 묻는 질문</Link>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuIconWrapper>
                <S.MenuIconBtn>
                  <CgMenuGridO size='16px' />
                </S.MenuIconBtn>
              </S.MenuIconWrapper>
            </S.MenuItem>
            <S.SignInBtn>
              <Link href='/signin'>로그인</Link>
            </S.SignInBtn>
          </S.MenuItems>
        </S.MenuContainer>
      </S.InnerContainer>
    </S.HeaderContainer>
  );
};

export default Header;
