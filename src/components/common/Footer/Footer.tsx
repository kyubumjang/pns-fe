import Link from 'next/link';

import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.InnerContainer>
        <S.FooterMenuContainer>
          <S.FooterMenuItems>
            <li>
              <S.FooterMenuItemTitle>서비스</S.FooterMenuItemTitle>
            </li>
            <S.FooterMenuItem>
              <Link href='/notice'>공지사항</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/faq'>자주 묻는 질문</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/prepare'>주문 서비스</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/support'>고객센터</Link>
            </S.FooterMenuItem>
          </S.FooterMenuItems>
          <S.FooterMenuItems>
            <li>
              <S.FooterMenuItemTitle>회사</S.FooterMenuItemTitle>
            </li>
            <S.FooterMenuItem>
              <Link href='/team'>회사 소개</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='https://daehan-tech.vercel.app/'>대한테크</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/prepare'>채용</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/prepare'>공고</Link>
            </S.FooterMenuItem>
          </S.FooterMenuItems>
          <S.FooterMenuItems>
            <li>
              <S.FooterMenuItemTitle>문의</S.FooterMenuItemTitle>
            </li>
            <S.FooterMenuItem>
              <Link href='/prepare'>사업 제휴</Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='/prepare'>주문 제작 문의</Link>
            </S.FooterMenuItem>
          </S.FooterMenuItems>
          <S.FooterMenuItems>
            <li>
              <S.FooterMenuItemTitle>고객센터</S.FooterMenuItemTitle>
            </li>
            {/* <S.FooterMenuItem>
              <Link href='tel:010-605-5890'>전화: 031-605-5890</Link>
            </S.FooterMenuItem> */}
            <S.FooterMenuItem>
              <Link href='mailto:jkb2221@gmail.com'>
                이메일: jkb2221@gmail.com
              </Link>
            </S.FooterMenuItem>
            <S.FooterMenuItem>
              <Link href='prepare'>민원 접수</Link>
            </S.FooterMenuItem>
          </S.FooterMenuItems>
        </S.FooterMenuContainer>
        <S.FooterAddress>
          <strong>(주)피앤에스</strong>
          <br />
          {/* FIXME: 사용자 등록 번호: 수정 필요 */}
          사업자 등록 번호: xxx-xx-xxxxx | 대표: 장미나
          <br />
          {/* FIXME: 호스팅 서비스: 수정 필요 */}
          호스팅 서비스: 콜렛 제작 | 신고 번호: 110
          <br />
          13211 경기 성남시 중원구 갈마치로 234, 902호 (SK지식산업센터)
          <br />
        </S.FooterAddress>
        <S.FooterSubMenuItems>
          <S.FooterSubMenuItem>
            <Link href='/prepare'>서비스 이용약관</Link>
          </S.FooterSubMenuItem>
          <S.FooterSubMenuItem>
            <Link href='/prepare'>
              <strong>개인정보 처리방침</strong>
            </Link>
          </S.FooterSubMenuItem>
          <S.FooterSubMenuItem>
            <Link href='/prepare'>서비스 이용약관</Link>
          </S.FooterSubMenuItem>
          <S.FooterSubMenuItem>
            <Link href='/prepare'>이용자의 권리 및 유의사항</Link>
          </S.FooterSubMenuItem>
          <S.FooterSubMenuItem>
            <Link href='/prepare'>위치기반서비스 이용약관</Link>
          </S.FooterSubMenuItem>
        </S.FooterSubMenuItems>
      </S.InnerContainer>
    </S.FooterContainer>
  );
};

export default Footer;
